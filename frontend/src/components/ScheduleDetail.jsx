import { useState } from "react";
import ScheduleForm from "./ScheduleForm";
import useScheduleContext from "../hooks/useScheduleContext";

const ScheduleDetail = ({ employeeSchedule }) => {
  const { dispatch } = useScheduleContext();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    Monday: employeeSchedule.Monday,
    Tuesday: employeeSchedule.Tuesday,
    Wednesday: employeeSchedule.Wednesday,
    Thursday: employeeSchedule.Thursday,
    Friday: employeeSchedule.Friday,
    Saturday: employeeSchedule.Saturday,
    Sunday: employeeSchedule.Sunday,
  });

  // form onChange handler
  const handleChange = (day, e) => {
    setFormData({
      ...formData,
      [day]: e.target.value, // Update specific day in the schedule
    });
  };

  // edit button handler
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/api/schedule/${employeeSchedule._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      // update schedule context
      dispatch({ type: "UPDATE_SCHEDULE", payload: json });

      // disable edit mode
      setIsEditing(false);
    }
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
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        <option value="Dayoff">Dayoff</option>
      </select>
    </fieldset>
  ));

  return (
    <div>
      <h3>{employeeSchedule.name}</h3>
      <button onClick={toggleEdit}>
        {isEditing ? "Cancel" : "Change schedule"}
      </button>
      <form onSubmit={handleSubmit} className="sch-form">
        <div>{daysFieldset}</div>
        {/* show submit btn in edit mode */}
        {isEditing && <button>Submit</button>}
      </form>
    </div>
  );
};

export default ScheduleDetail;
