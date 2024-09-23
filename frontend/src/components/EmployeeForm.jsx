import { useState } from "react";
import useEmployeeContext from "../hooks/useEmployeeContext";

const EmployeeForm = ({toggleForm}) => {
  const { dispatch } = useEmployeeContext();
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
  });
  const [error, setError] = useState(false);

  // on change handler for form data
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

    if(!response.ok){
      setError(json.error)
    }

    if (response.ok) {
      // update global context
      dispatch({ type: "CREATE_EMPLOYEE", payload: json });
      // reset form data
      setFormData({
        name: "",
        employeeId: "",
        email: "",
      });
      // set error to false
      setError(false);
      // hide form
      toggleForm();
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="employee-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange} 
        />

        <label htmlFor="id">Employee ID:</label>
        <input
          type="text"
          name="employeeId"
          id="id"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button className="emp-btn">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default EmployeeForm;
