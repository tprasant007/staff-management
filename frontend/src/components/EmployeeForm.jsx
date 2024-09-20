import { useState } from "react";
import useEmployeeContext from "../hooks/useEmployeeContext";

const EmployeeForm = () => {
  const { dispatch } = useEmployeeContext();
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/employee", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    if (response.ok) {
      // update local state
      dispatch({ type: "CREATE_EMPLOYEE", payload: json });
      // reset form data
      setFormData({
        name: "",
        employeeId: "",
        email: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="employee-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name" // Add name attribute
          id="name"
          value={formData.name} // Set value to formData.name
          onChange={handleChange} // Handle change
        />

        <label htmlFor="id">Employee ID:</label>
        <input
          type="text"
          name="employeeId" // Add name attribute
          id="id"
          value={formData.employeeId} // Set value to formData.id
          onChange={handleChange} // Handle change
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email" // Add name attribute
          id="email"
          value={formData.email} // Set value to formData.email
          onChange={handleChange} // Handle change
        />

        <div className="btn-container">
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
