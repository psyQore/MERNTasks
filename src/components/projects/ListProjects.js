import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  // Extraer proyectos de state incicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Obtener projects cuando carge el component
  useEffect(() => {
    getProjects();
  }, []);

  // Revisar si projects tiene algo
  if (projects.length === 0)
    return <p>There are no projects, start by creating one.</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="tarea">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
