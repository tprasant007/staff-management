import { useContext } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";

const useScheduleContext = () => {
  const context = useContext(ScheduleContext);
  return context;
};

export default useScheduleContext;
