import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS } from "../../types";


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
      payload: projects
    })
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
        getProjects
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
