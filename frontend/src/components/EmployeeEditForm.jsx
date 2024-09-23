import { useState } from "react";
import useEmployeeContext from "../hooks/useEmployeeContext";

const EmployeeEditForm = ({ employee, handleEditToggle, isEditing }) => {
  const { dispatch } = useEmployeeContext();
  const [formData, setFormData] = useState({
    name: employee.name,
    employeeId: employee.employeeId,
    email: employee.email,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/api/employee/${employee._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      // update employee context
      dispatch({ type: "UPDATE_EMPLOYEE", payload: json });
      handleEditToggle();
    }
  };

  return (
    <>
      {isEditing && (
        <div>
          <form onSubmit={handleSubmit} className="employee-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="btn-container">
              <button type="submit">Save</button>
              <button type="button" onClick={handleEditToggle}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EmployeeEditForm;
