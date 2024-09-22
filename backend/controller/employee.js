const Employee = require("../model/employeeModel");
const mongoose = require("mongoose");

// get all employee details
const getEmployee = async (req, res) => {
  const employees = await Employee.find({}).sort({ name: 1 });
  res.json(employees);
};

// create a new employee
const createEmployee = async (req, res) => {
  const { name, employeeId, email } = req.body;

  // check if req has all the data
  if (!name || !employeeId || !email) {
    return res.status(400).json({ error: "Please fill in all the fields" });
  }
  try {
    const employee = await Employee.create({ name, employeeId, email });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an employee
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  // id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }
  const employee = await Employee.deleteEmployeeAndSchedule(id);
  if (!employee) {
    return res.status(404).json({ error: "No such employee" });
  }
  return res.status(200).json(employee);
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
