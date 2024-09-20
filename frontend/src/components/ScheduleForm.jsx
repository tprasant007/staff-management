import { useState } from "react";

const ScheduleForm = () => {
  const [schedule, setSchedule] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schedule);
  };

  // Handle change for each select dropdown
  const handleChange = (day, event) => {
    setSchedule({
      ...schedule,
      [day]: event.target.value, // Update specific day in the schedule
    });
  };

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Create the form for the week
  const weeklyForm = weekdays.map((day) => (
    <div key={day}>
      <h3>{day}</h3>
      <select
        value={schedule[day]} // Set value to the current shift for this day
        onChange={(e) => handleChange(day, e)} // Pass the day to handleChange
      >
        <option value="">-- Select a shift --</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        <option value="Dayoff">Dayoff</option>
      </select>
    </div>
  ));

  return (
    <div className="employee-detail">
      <form onSubmit={handleSubmit}>
        {weeklyForm}
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default ScheduleForm;
