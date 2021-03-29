import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [
      { id: 1, name: "Tienda Virtual" },
      { id: 2, name: "Intranet" },
      { id: 3, name: "Diseño de Sitios Web" },
      { id: 4, name: "MERN"}
    ],
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

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        showForm,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
