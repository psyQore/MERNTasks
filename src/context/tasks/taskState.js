import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import uuid from "uuid/dist/v4";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Elegir Plataforma", status: true, projectId: 1 },
      { id: 2, name: "Elegir Color", status: true, projectId: 2 },
      { id: 3, name: "Elegir Metodo de Pago", status: true, projectId: 3 },
      { id: 4, name: "Elegir Hosting", status: true, projectId: 1 },
      { id: 5, name: "Elegir Logo", status: true, projectId: 3,},
      { id: 6, name: "Elegir Imagen", status: true, projectId: 4 },
      { id: 7, name: "Elegir Modal", status: true, projectId: 2 },
      { id: 8, name: "Elegir Color", status: true, projectId: 3 },
      { id: 9, name: "Elegir Plataforma", status: true, projectId: 1 },
      { id: 10, name: "Elegir Plataforma", status: true, projectId: 4 },
    ],
    tasksproject: null,
    errortask: false,
    selectedtask: null
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

  // Agregar una tarea al project seleccionado
  const addTask = (task) => {
    task.id = uuid();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  }

  // Valida y muestra un error en caso de que sea necesario
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Eliminar task por id
  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  // Cambia el status de la task
  const changeTaskStatus = (task) => {
    dispatch({
      type: STATUS_TASK,
      payload: task,
    })
  }

  // Extrae una task para edicion
  const saveCurrenTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    })
  }

  // Edita o modifica una task
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    })
  }

  // Elimina la task selected
  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskStatus,
        saveCurrenTask,
        updateTask,
        clearTask
      
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
