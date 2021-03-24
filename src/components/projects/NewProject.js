import React, { Fragment } from "react";

const NewProject = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>

      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre del Proyecto"
          name="name"
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NewProject;
