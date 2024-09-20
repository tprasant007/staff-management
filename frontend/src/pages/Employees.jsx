import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import useEmployeeContext from "../hooks/useEmployeeContext";
import EmployeeDetail from "../components/EmployeeDetail";

const Employees = () => {
  const { employees, dispatch } = useEmployeeContext();
  const [showForm, setShowForm] = useState(false); // state for showing employee form

  useEffect(() => {
    const getEmployees = async () => {
      const response = await fetch("http://localhost:8000/api/employee");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        // update local state
        dispatch({ type: "SET_EMPLOYEE", payload: json });
        console.log("ok");
      } else console.log("error");
    };
    getEmployees();
  }, []);

  // show employee form handler
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm}>{!showForm ? "Add new employee" : "Cancel"}</button>
      {employees &&
        employees.map((employee) => (
          <EmployeeDetail key={employee._id} employee={employee} />
        ))}
      {showForm && <EmployeeForm toggleForm={toggleForm}/>}
    </div>
  );
};

export default Employees;
