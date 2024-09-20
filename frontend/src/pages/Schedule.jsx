import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Schedule = () => {
  const [schedule, setSchedule] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getSchedule = async () => {
      const response = await fetch(`http://localhost:8000/api/schedule/${id}`);
      const json = await response.json();

      if (response.ok) {
        console.log(json)
      }
    };
    getSchedule();
  }, []);
  return (
    <div>
      schedule
      <p>{id}</p>
    </div>
  );
};

export default Schedule;
