import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  // Obtener el state del contextProject
  const projectsContext = useContext(ProjectContext);
  const { projectActual } = projectsContext;

  const taskContext = useContext(TaskContext);
  const { getTasks } = taskContext;

  // Funcion para agregar el project actual
  const selectProject = (id) => {
    projectActual(id); // Fijar un project actual
    getTasks(id); // Filtrar las tareas cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
