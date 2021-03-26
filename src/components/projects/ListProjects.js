import React from "react";
import Project from './Project';

const ListProjects = () => {
  const projects = [
    { name: "Tienda Virtual" },
    { name: "Intranet" },
    { name: "Diseño de Sitios Web" },
  ];

  return (
    <ul className="listado-proyectos">
     {projects.map(project => (
            <Project 
                project={project}
            />
        ))}
    </ul>
  )
}

export default ListProjects;
