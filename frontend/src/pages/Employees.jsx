import { useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import useEmployeeContext from "../hooks/useEmployeeContext";
import EmployeeDetail from "../components/EmployeeDetail";

const Employees = () => {
  const { employees, dispatch } = useEmployeeContext();
  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch("http://localhost:8000/api/employee");
      const json = await response.json();
      console.log(json)

      if (response.ok) {
        // update local state
        dispatch({ type: "SET_EMPLOYEE", payload: json });
        console.log("ok")
      } else(
        console.log("error")
      )
    };
    getEmployees();
  }, []);

  return (
    <div>
      {employees &&
        employees.map((employee) => (
          <EmployeeDetail key={employee._id} employee={employee} />
        ))}
      <EmployeeForm />
    </div>
  );
};

export default Employees;
