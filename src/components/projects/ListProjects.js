import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ListProjects = () => {

  // Extraer proyectos de state incicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;
  
  // Obtener projects cuando carge el component
  useEffect(() => { 
    getProjects();
  }, []);

  // Revisar si projects tiene algo
  if(projects.length === 0 ) return <p>There are no projects, start by creating one.</p>;


  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
