const mongoose = require("mongoose");
const Schedule = require("../model/scheduleModel");
const Employee = require("../model/employeeModel");
// get all schedules
const getSchedules = async (req, res) => {
  const schedules = await Schedule.find({});
  res.json(schedules);
};

// create a schedule
const postSchedule = async (req, res) => {
  const schedule = req.body;

  const employeeSchedule = await Schedule.create(schedule);
  res.json(employeeSchedule);
};

// get an individual schedule
const getSchedule = async (req, res) => {
  // employee mongoId
  const { id } = req.params;
  // Check if id exists and is valid
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }
  // Check if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  // find employee in Employee document with id
  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  // retrieve employee name
  const name = employee.name;
  // find schedule with name property
  const schedule = await Schedule.findOne({ name });
  if (!schedule) {
    return res.status(404).json({ error: "Schedule not found" });
  }
  res.json(schedule);
};

module.exports = { postSchedule, getSchedules, getSchedule };
