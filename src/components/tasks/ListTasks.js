import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTasks = () => {
  // Obtener el state del contextProject
  const projectsContext = useContext(ProjectContext);
  const { project, deleteProject } = projectsContext;

  // Obtener las task del project
  const tasksContext = useContext(TaskContext);
  const { tasksproject } = tasksContext;

  // Si no hay project seleccionado
  if (!project) return <h2>Select a Project</h2>;

  // Array destructuring para extraer el project actual
  const [projectActual] = project;

  return (
    <Fragment>
      <h2>Project: {projectActual.name}</h2>

      <ul className="listado-tareas">
        {tasksproject.length === 0 ? (
          <li className="tarea">
            <p>There is no Task </p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksproject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(projectActual.id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
