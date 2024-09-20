import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  return context;
};

export default useEmployeeContext;
