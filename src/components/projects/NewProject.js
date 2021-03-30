import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Obtener el state del contextProject
  const projectsContext = useContext(projectContext);
  const { form, errorform, showForm, addProject, showError } = projectsContext;

  // State para proyecto
  const [project, saveProject] = useState({
    name: "",
  });

  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitProject = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if (name === "") {
      showError();
      return;
    }

    // Agregar al state
    addProject(project);

    // Reiniciar el form
    saveProject({
      name: "",
    });
  };

  // Destructuring para sacar name
  const { name } = project;

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>

      {/* Si form esta true, muestra el formulario */}

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            autoComplete="off"
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}
      {errorform ? (
        <p className="mensaje error">The name of the project is required</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
