import React, { useReducer } from "react";

import uuid from "uuid/dist/v4";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de Sitios Web" },
    { id: 4, name: "MERN" },
  ];

  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Serie de funciones para el CRUD de proyecto
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Onbtener los projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  // Agregar nuevo proyecto
  const addProject = (project) => {
    project.id = uuid();

    // Insertar el proyecto en el state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  // Selecciona el proyecto que el usuario dio click
  const projectActual = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        projectActual,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
