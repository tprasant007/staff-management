import { createContext, useEffect, useReducer } from "react";

export const ScheduleContext = createContext();

export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "SET_SCHEDULE":
      return {
        schedules: action.payload,
      };
    case "CREATE_SCHEDULE":
      return {
        schedules: [...state.schedules, action.payload],
      };
    case "UPDATE_SCHEDULE":
      return {
        schedules: state.schedules.map((schedule) =>
          schedule._id === action.payload._id ? action.payload : schedule
        ),
      };
      case "DELETE_SCHEDULE":
        return {
          schedules: state.schedules.filter(schedule => schedule._id !== action.payload)
        }
    default:
      return state;
  }
};

const ScheduleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scheduleReducer, {
    schedules: [],
  });

  useEffect(() => {
    // save to sessionStorage to reuse
    sessionStorage.setItem("schedules", JSON.stringify(state.schedules));
  }, [state.schedules]);

  return (
    <ScheduleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
