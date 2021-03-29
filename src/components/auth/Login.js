import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // State del login
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  // Extraer de user
  const { email, password } = user;

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

    // Pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
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
              autoComplete="off"
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log In"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="enlace-cuenta">
          Get Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
