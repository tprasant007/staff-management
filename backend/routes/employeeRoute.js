const express = require("express");
const {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controller/employee");

const router = express.Router();

router.get("/", getEmployee);
router.post("/", createEmployee);
router.delete("/:id", deleteEmployee);
router.patch("/:id", updateEmployee);

module.exports = router;
