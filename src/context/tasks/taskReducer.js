import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAR_TASK,
} from "../../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksproject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errortask: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        errortask: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
    case STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload,
      };
    case CLEAR_TASK:
      return {
        ...state,
        selectedtask: null,
      };
    default:
      return state;
  }
};
