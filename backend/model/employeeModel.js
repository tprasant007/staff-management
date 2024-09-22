const mongoose = require("mongoose");
const Schedule = require("../model/scheduleModel");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// static method for deleting employees and their schedule
employeeSchema.statics.deleteEmployeeAndSchedule = async function (id) {

  // delete employee from collection
  const employee = await this.findByIdAndDelete(id);
  if(!employee) {
    throw Error("No such employee")
  }
  // delete employee's schedule from collection
  const schedule = await Schedule.findOneAndDelete({ name: employee.name });

  if (!schedule) {
    return {employee}; //if employee's schedule not found, return employee only
  }
  return { employee, schedule };
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
