const mongoose = require("mongoose");
const Schedule = require("../model/scheduleModel");


// get all schedules
const getSchedules = async (req, res) => {
  const schedules = await Schedule.find({}).sort({ name: 1 });
  res.status(200).json(schedules);
};

// create a schedule
const postSchedule = async (req, res) => {
  const schedule = req.body;

  try {
    const employeeSchedule = await Schedule.create(schedule);
    res.status(200).json(employeeSchedule);
  } catch (error) {
  res.status(400).json({error: "All fields are required"})}
};

// update a schedule
const updateSchedule = async (req, res) => {
  const { id } = req.params;

  // id validation
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No schedule found for employee" });
  }
  const schedule = req.body;

  const employeeSchedule = await Schedule.findByIdAndUpdate(id, schedule, {
    new: true,
  });

  if (!employeeSchedule) {
    return res.status(404).json({ error: "No such schedule" });
  }

  res.status(200).json(employeeSchedule);
};

module.exports = { postSchedule, getSchedules, updateSchedule };
