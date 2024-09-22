import { useState } from "react";
import useScheduleContext from "../hooks/useScheduleContext";
import { useNavigate } from "react-router";

const ScheduleForm = ({ employeeName }) => {
  const navigate = useNavigate();
  const { dispatch } = useScheduleContext();
  const [formData, setFormData] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
    Saturday: "",
    Sunday: "",
  });

  const handleChange = (day, e) => {
    setFormData({
      ...formData,
      [day]: e.target.value, // Update specific day in the schedule
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("http://localhost:8000/api/schedule", {
      method: "POST",
      body: JSON.stringify({ name: employeeName, ...formData }), //sending name with forms
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = response.json();

    if (response.ok) {
      console.log("ok done");
      // update schedules context
      dispatch({ type: "CREATE_SCHEDULE", payload: json });
      // navigate to dashboard
      navigate("/");
    } else {
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
        required
      >
        <option value="">--select--</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
        <option value="Dayoff">Dayoff</option>
      </select>
    </fieldset>
  ));

  return (
    <div>
      <h3>{`Could not find schdeule of ${employeeName}.`}</h3>
      <p>Create schedule using form below.</p>
      <form onSubmit={handleSubmit} className="sch-form">
        <div>

        {daysFieldset}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ScheduleForm;
