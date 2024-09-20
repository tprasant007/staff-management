import { createContext, useReducer } from "react";

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
    default:
      return state;
  }
};

const ScheduleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(scheduleReducer, {
    schedules: null,
  });

  return (
    <ScheduleContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
