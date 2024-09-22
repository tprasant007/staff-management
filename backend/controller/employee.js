const Employee = require("../model/employeeModel");
const mongoose = require("mongoose");

// get all employee details
const getEmployee = async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
};

// create a new employee
const createEmployee = async (req, res) => {
  const { name, employeeId, email } = req.body;
  const employee = await Employee.create({ name, employeeId, email });
  res.json(employee);
};

// delete an employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  // id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }
  const employee = await Employee.findByIdAndDelete(id);
  res.status(200).json(employee);
};

// edit an employee
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, employeeId, email } = req.body;

  // id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  const employee = await Employee.findByIdAndUpdate(
    id,
    { name, employeeId, email },
    { new: true } // Return the updated document
  );

  if (!employee) {
    return res.status(404).json({ error: "No such employee" });
  }

  res.status(200).json(employee);
};

module.exports = {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
