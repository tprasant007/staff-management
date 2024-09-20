import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ScheduleForm from "../components/ScheduleForm";
import ScheduleDetail from "../components/ScheduleDetail";

const Schedule = () => {
  const [schedule, setSchedule] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getSchedule = async () => {
      const response = await fetch(`http://localhost:8000/api/schedule/${id}`);
      const json = await response.json();

      if (!response.ok) {
        setError("Could not find schedule for the employee");
      } else if (response.ok) {
        setSchedule(json);
        setError("");
      }
    };
    getSchedule();
  }, []);
  return (
    <div className="main">
      <ScheduleDetail schedule={schedule} error={error} />
    </div>
  );
};

export default Schedule;
