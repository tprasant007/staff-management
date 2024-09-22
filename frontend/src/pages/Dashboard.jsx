import { useEffect } from "react";
import { Link } from "react-router-dom";

import useScheduleContext from "../hooks/useScheduleContext";
import SchedulesDetail from "../components/SchedulesDetail";

const Dashboard = () => {
  const { schedules, dispatch } = useScheduleContext();

  useEffect(() => {
    const getSchedules = async () => {
      const responese = await fetch("http://localhost:8000/api/schedule");
      const json = await responese.json();

      if (responese.ok) {
        // set schedule context
        dispatch({ type: "SET_SCHEDULE", payload: json });
      }
    };

    getSchedules();
  }, []);

  if (schedules && schedules.length == 0) { //if there are no employees
    return (
      <div className="dashboard">
        <h2>
          Add some <Link to="/employees">employees</Link> to create schedules
        </h2>
      </div>
    );
  }

  return (
    <div className="dashboard">
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
