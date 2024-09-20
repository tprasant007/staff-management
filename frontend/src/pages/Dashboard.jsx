import { useEffect } from "react";
import useScheduleContext from "../hooks/useScheduleContext";
import SchedulesDetail from "../components/SchedulesDetail";
import ScheduleForm from "../components/ScheduleForm";

const Dashboard = () => {
  const { schedules, dispatch } = useScheduleContext();

  useEffect(() => {
    const getSchedules = async () => {
      const responese = await fetch("http://localhost:8000/api/schedule");
      const json = await responese.json();

      if (responese.ok) {

        // update global context
        dispatch({ type: "SET_SCHEDULE", payload: json });
      }
    };

    getSchedules();
  }, []);

  return (
    <div className="main">
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
              <SchedulesDetail key={schedule._id} schedule={schedule} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
