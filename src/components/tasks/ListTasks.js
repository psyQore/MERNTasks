import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksProject = [
    { name: "Elegit Plataforma", status: true },
    { name: "Elegit Color", status: true },
    { name: "Elegit Plataforma de Pago", status: true },
    { name: "Elegit Hosting", status: true },
  ];

  return (
    <Fragment>
      <h2>Project: Tienda Virtual</h2>

      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>There is no Task </p>
          </li>
        ) : (
          tasksProject.map((task) => <Task task={task} />)
        )}
      </ul>
    </Fragment>
  );
};

export default ListTasks;
