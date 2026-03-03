const express = require("express");
const {
  addExpense,
  getAllExpense,
  deleteExpense,
  downloadExpenseExcel,
} = require("../controllers/expenseController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/add", protect, addExpense);
router.get("/get", getAllExpense);
router.get("/downloadExcel", downloadExpenseExcel);
router.delete("/:id", deleteExpense);

module.exports = router;
