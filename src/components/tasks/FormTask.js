import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  // Extraer si un proyecto esta activo
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const taskContext = useContext(TaskContext);
  const { errortask, addTask, validateTask, getTasks } = taskContext;

  // State del form
  const [task, saveTask] = useState({
    name: "",
  });

  // Destructuring del state
  const { name } = task;

  // Si no hay project seleccionado
  if (!project) return null;

  // Array destructuring para extraer el project actual
  const [projectActual] = project;

  // Leer los valores del form

  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (name.trim() === "") {
      validateTask();
      return;
    }
    // Pasar la validacion
    // Agregar la nueva task al state de tasks
    task.projectId = projectActual.id;
    task.status = false;
    addTask(task);

    // Obtener y filtrat las task de projectActual
    getTasks(projectActual.id)

    // Reiniciar el form
    saveTask({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name Task..."
            name="name"
            value={name}
            onChange={handleChange}
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
      {errortask ? (
        <p className="mensaje error">The name of the task is required</p>
      ) : null}
    </div>
  );
};

export default FormTask;
