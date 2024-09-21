import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ScheduleForm from "../components/ScheduleForm";
import ScheduleDetail from "../components/ScheduleDetail";

const Schedule = () => {
  const { id } = useParams();

  const [schedule, setSchedule] = useState("");

  useEffect(() => {
    const getSchedule = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/schedule/${id}`
        );

        if (!response.ok) {
          throw new Error("Could not find schedule for the employee");
        }

        const json = await response.json();
        setSchedule(json);
        setError("");
      } catch (err) {
        console.log(err)
      }
    };

    getSchedule();
  }, [id]);

  if (schedule) {
    return (
      <div className="main">
        <ScheduleDetail schedule={schedule} />
      </div>
    );
  }
  return (
    <div className="main">
      <ScheduleForm />
    </div>
  );
};

export default Schedule;
