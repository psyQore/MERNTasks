import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Obtener las funcion del context de project
  const projectsContext = useContext(ProjectContext);
  const { project } = projectsContext;

  // Obtener las funcion del context de task
  const taskContext = useContext(TaskContext);
  const { deleteTask, getTasks } = taskContext;

  // Destructuring al project
  const [projectActual] = project;

  // Funcion que se ejecuta cuando el usuario presiona el btn de deleteTask
  const taskDelete = (id) => {
    deleteTask(id);
    getTasks(projectActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => taskDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
