const Schedule = require("../model/scheduleModel");

// get all schedules
const getSchedules = async(req, res) => {
    const schedule = await Schedule.find({})
    res.json(schedule)
}

// create a schedule
const postSchedule = async (req, res) => {
  const schedule = req.body;

  const employeeSchedule = await Schedule.create(schedule);
  res.json(employeeSchedule);
};

module.exports = { postSchedule, getSchedules };


