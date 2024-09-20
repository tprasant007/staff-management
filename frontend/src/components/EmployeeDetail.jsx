import { useState } from "react";
import useEmployeeContext from "../hooks/useEmployeeContext";
import EmployeeEditForm from "./EmployeeEditForm";

const EmployeeDetail = ({ employee }) => {
  const { dispatch } = useEmployeeContext();
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
      // update local state
      dispatch({ type: "DELETE_EMPLOYEE", payload: json._id });
    }
  };

  return (
    <div className="employee-detail">
      <h2>{employee.name}</h2>
      <p>Id: {employee.employeeId}</p>
      <p>Email: {employee.email}</p>
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
