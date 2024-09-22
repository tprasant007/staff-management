import { createContext, useReducer } from "react";

export const EmployeeContext = createContext();

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMPLOYEE":
      return {
        employees: action.payload,
      };
    case "CREATE_EMPLOYEE":
      return {
        employees: [...state.employees, action.payload],
      };
    case "DELETE_EMPLOYEE":
      return {
        employees: state.employees.filter((i) => i._id !== action.payload),
      };
    case "UPDATE_EMPLOYEE":
      return {
        employees: state.employees.map((emp) =>
          emp._id === action.payload._id ? action.payload : emp
        ),
      };
    default:
      return state;
  }
};



const EmployeeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, {
    employees: [],
  });
  
  
  return (
    <EmployeeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
