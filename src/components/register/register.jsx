import React from "react";
import { Link } from "react-router-dom";
import "./registerStyles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userRegisterAsync } from "../../redux/actions/userAction";

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    dispatch(userRegisterAsync(data));
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <input
          className={errors.name ? "inputError" : ""}
          type="text"
          placeholder="nombre"
          {...register("name", {
            required: "Nombre es requerido",
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          className={errors.email ? "inputError" : ""}
          type="email"
          placeholder="email"
          {...register("email", {
            required: "Email es requerido",
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          className={errors.password ? "inputError" : ""}
          type="password"
          placeholder="contraseña"
          {...register("password", {
            required: "Contraseña es requerido",
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit" disabled={loading}>
          Registrarse
        </button>
        {loading && <span>Cargando...</span>}

        <Link to="/login">Ir al Login</Link>
      </form>
    </div>
  );
};

export default Register;
