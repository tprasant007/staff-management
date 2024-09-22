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

// update a schedule
const updateSchedule = async (req, res) => {
  const { name } = req.params;
  const schedule = req.body;

  const employeeSchedule = await Schedule.findOneAndUpdate({name}, schedule, {
    new: true,
  });

  if (!employeeSchedule) {
    return res.status(404).json({ error: "No such schedule" });
  }

  res.status(200).json(employeeSchedule);
};

module.exports = { postSchedule, getSchedules, updateSchedule };
