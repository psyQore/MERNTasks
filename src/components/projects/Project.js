import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  // Obtener el state del contextProject
  const projectsContext = useContext(projectContext);
  const { projectActual } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={ () => projectActual(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
