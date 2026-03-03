const express = require("express");
const {
  addIncome,
  getAllIncome,
  deleteIncome,
  downloadIncomeExcel,
} = require("../controllers/incomeController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/add", protect, addIncome);
router.get("/get", getAllIncome);
router.get("/downloadExcel", downloadIncomeExcel);
router.delete("/:id", deleteIncome);

module.exports = router;
