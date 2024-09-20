import { useEffect } from "react";
import useScheduleContext from "../hooks/useScheduleContext";
import ScheduleDetail from "../components/ScheduleDetail";
import ScheduleForm from "../components/ScheduleForm";

const Dashboard = () => {
  const { schedules, dispatch } = useScheduleContext();

  useEffect(() => {
    const getSchedules = async () => {
      const responese = await fetch("http://localhost:8000/api/schedule");
      const json = await responese.json();

      if (responese.ok) {
        console.log("ok")
        // update local state
        dispatch({ type: "SET_SCHEDULE", payload: json });
        console.log(schedules);
      }
    };

    getSchedules();
  }, []);

  return (
    <div className="schedules">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {schedules &&
            schedules.map((schedule) => (
              <ScheduleDetail key={schedule._id} schedule={schedule} />
            ))}
        </tbody>
      </table>
      <ScheduleForm />
    </div>
  );
};

export default Dashboard;
