import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {

    // Extraer si un proyecto esta activo
    const projectsContext = useContext(projectContext);
    const { project } = projectsContext;

      // Si no hay project seleccionado
  if (!project) return null;

  // Array destructuring para extraer el project actual
  const [projectActual] = project;
  
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name Task..."
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
