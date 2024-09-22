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

      if (response.ok) {
        // set employee context
        dispatch({ type: "SET_EMPLOYEE", payload: json });
      } else console.log("error");
    };
    getEmployees();
  }, []);

  // show employee form handler
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="employees">
      <div className="emp-container">
        {employees &&
          employees.map((employee) => (
            <EmployeeDetail key={employee._id} employee={employee} />
          ))}
      </div>

      <div className="new-employee">
        <button className="emp-btn" onClick={toggleForm}>
          {!showForm ? "Add new employee" : "Cancel"}
        </button>
        {showForm && <EmployeeForm toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default Employees;
