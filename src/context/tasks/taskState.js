import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TASKS_PROJECT } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Elegir Plataforma", status: true, projectId: 1 },
      { name: "Elegir Color", status: true, projectId: 2 },
      { name: "Elegir Metodo de Pago", status: true, projectId: 3 },
      { name: "Elegir Hosting", status: true, projectId: 1 },
      { name: "Elegir Plataforma de Compra", status: true, projectId: 3 },
      { name: "Elegir Imagen", status: true, projectId: 4 },
      { name: "Elegir Modal", status: true, projectId: 2 },
      { name: "Elegir Color", status: true, projectId: 3 },
      { name: "Elegir Plataforma", status: true, projectId: 1 },
      { name: "Elegir Plataforma", status: true, projectId: 4 },
    ],
    tasksproject: null,
  };

  // Crear el dispatch y state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Crear las funciones

  // Obtener las tasks de un project
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
