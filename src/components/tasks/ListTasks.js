import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  // Obtener el state del contextProject
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Si no hay project seleccionado
  if (!project) return <h2>Select a Project</h2>;

  // Array destructuring para extraer el project actual
  const [projectActual] = project;

  const tasksProject = [

  ];

  return (
    <Fragment>
      <h2>Project: {projectActual.name}</h2>

      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>There is no Task </p>
          </li>
        ) : (
          tasksProject.map((task) => <Task key={task.name} task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar" onClick={() => deleteProject(projectActual.id)}>
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
