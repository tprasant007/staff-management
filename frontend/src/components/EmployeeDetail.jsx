import { useState } from "react";
import { Link } from "react-router-dom";

import EmployeeEditForm from "./EmployeeEditForm";
import useEmployeeContext from "../hooks/useEmployeeContext";
import useScheduleContext from "../hooks/useScheduleContext";

const EmployeeDetail = ({ employee }) => {
  const { dispatch } = useEmployeeContext();
  const { dispatch: dispatchSchedule } = useScheduleContext();
  const [isEditing, setIsEditing] = useState(false); // State for editing mode

  // Toggle editing mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // delete handler function
  const handleDelete = async () => {
    // send delete request to server
    const response = await fetch(
      `http://localhost:8000/api/employee/${employee._id}`,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      // update employee context
      dispatch({ type: "DELETE_EMPLOYEE", payload: json.employee._id });

      // update schedule context if schedule available
      if (json.schedule) {
        dispatchSchedule({
          type: "DELETE_SCHEDULE",
          payload: json.schedule._id,
        });
      }
    }
  };

  return (
    <div className="emp-detail">
      <h3>{employee.name}</h3>
      <p>Id: {employee.employeeId}</p>
      <p>Email: {employee.email}</p>
      <Link to={`/schedule/${employee.name}`}>View Schedule</Link>

      <div className="btn-container">
        <button onClick={handleEditToggle}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <EmployeeEditForm
        employee={employee}
        handleEditToggle={handleEditToggle}
        isEditing={isEditing}
      />
    </div>
  );
};

export default EmployeeDetail;
