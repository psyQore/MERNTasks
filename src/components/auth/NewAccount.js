import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  // State del login
  const [user, saveUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Extraer de user
  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios

    // Password minimo de 6 caracteres

    // Los password son iguales

    // Pasarlo al action
    
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Get an Account</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              autocomplete="off"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              autocomplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              autocomplete="off"
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              autocomplete="off"
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Repeat Your Password"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign up"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Get Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
