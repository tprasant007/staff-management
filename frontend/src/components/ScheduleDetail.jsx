import { useState } from "react";
import ScheduleForm from "./ScheduleForm";

const ScheduleDetail = ({ schedule, error }) => {
  console.log(schedule);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    Monday: schedule.Monday ,
    Tuesday: schedule.Tuesday ,
    Wednesday: schedule.Wednesday,
    Thursday: schedule.Thursday,
    Friday: schedule.Friday,
    Saturday: schedule.Saturday,
    Sunday: schedule.Sunday,
  });

  const handleChange = (day, e) => {
    setFormData({
      ...formData,
      [day]: e.target.value, // Update specific day in the schedule
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // create array of days
  const days = Object.keys(formData);

  // generate fieldset for each day
  const daysFieldset = days.map((day) => (
    <fieldset key={day}>
      <label htmlFor={day}>{day}</label>
      <select
        name={day}
        id={day}
        value={formData[day]}
        onChange={(e) => handleChange(day, e)}
        disabled={!isEditing}
      >
        {error && <option value=""></option>}
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        <option value="Dayoff">Dayoff</option>
      </select>
    </fieldset>
  ));

  return (
    <>
      {error && <div>{error}</div>}
      <div className="schedule-detail">
        <h2>{schedule.name}</h2>
        <button onClick={toggleEdit}>Create schedule</button>
        <form>{daysFieldset}</form>
      </div>
    </>
  );
};

export default ScheduleDetail;
