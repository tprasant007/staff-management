import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ScheduleForm from "../components/ScheduleForm";
import ScheduleDetail from "../components/ScheduleDetail";

const Schedule = () => {
  const { name } = useParams();
  const [employeeSchedule, setEmployeeSchedule] = useState(null);

  useEffect(() => {
    const storedSchedules = JSON.parse(sessionStorage.getItem("schedules"));
    const employee = storedSchedules.filter((s) => s.name === name)[0];
    setEmployeeSchedule(employee);
  }, [name]);

  if (employeeSchedule) {
    return (
      <div className="sch-dtl">
        <ScheduleDetail employeeSchedule={employeeSchedule} />
      </div>
    );
  }
  return (
    <div className="sch-dtl">
      <ScheduleForm employeeName={name} />
    </div>
  );
};

export default Schedule;
