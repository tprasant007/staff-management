const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
});

// Array of days
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Add each day to the schema
days.forEach(day => {
    scheduleSchema.add({
        [day]: {
            type: String,
            enum: ["AM", "PM", "Dayoff"],
        }
    });
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;