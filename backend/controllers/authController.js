// Authentication Controller for MySQL using Sequelize
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT token for authenticated user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

// Register new user
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body || {};

  // Validation: check for missing fields
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Check if email already exists (Sequelize query)
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use!" });
    }

    // Create the user (password will be hashed automatically by beforeCreate hook)
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl: profileImageUrl || ''
    });

    // Return user data with token (use 'id' instead of '_id' for MySQL)
    res.status(201).json({
      id: user.id,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl
      },
      token: generateToken(user.id),
    });
  } catch (err) {
    console.error("Registration error:", err); // Added detailed logging
    res.status(500).json({
      message: "Error registering user",
      error: err.message
    });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body || {};

  // Validation: check for missing fields
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    // Find user by email (Sequelize query)
    const user = await User.findOne({ where: { email } });

    // Check if user exists and password matches
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid Credentials!" });
    }

    // Return user data with token (use 'id' instead of '_id' for MySQL)
    res.status(200).json({
      id: user.id,
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        profileImageUrl: user.profileImageUrl
      },
      token: generateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({
      message: "Error logging in user",
      error: err.message
    });
  }
};

// Get user information
exports.getUserInfo = async (req, res) => {
  try {
    // Find user by ID (Sequelize query) - exclude password
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching user info!",
      error: err.message
    });
  }
};
