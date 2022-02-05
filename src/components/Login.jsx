import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BotonIngresar, ContForm, ContImg, CrearC, Inputs, Logo, Titulo } from "../styles/StyledLogin";

const Login = () => {
  const [data, setData] = useState({
    usuario: "",
    contraseña: "",
    logueado: false,
  });
  // const { usuario, contraseña, logueado } = data;
  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const navigate = useNavigate();
  const getData = JSON.parse(localStorage.getItem("Usuario"));

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    getData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Validacion = () => {
    if (getData.contraseña === data.contraseña && getData.usuario === data.usuario) {
      navigate("/home/guajolotes");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Validacion();
  };
  return (
    <ContForm onSubmit={handleSubmit}>
      <Titulo>Iniciar Sesion</Titulo>
      <ContImg>
        <Logo
          src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714828/guappjolota/Ilustraci%C3%B3n_sin_t%C3%ADtulo_66_1_hgez7k.png"
          alt="Logo"
        />
      </ContImg>
      <Inputs type="email" name="usuario" onChange={handleChange} placeholder="Ingresa tu correo" required />
      <Inputs type="password" name="contraseña" onChange={handleChange} placeholder="Ingresa tu contraseña" required />
      <BotonIngresar>Ingresar</BotonIngresar>
      <CrearC>
        ¿No tienes cuenta ? <Link to="/registro"> Crea una cuenta </Link>
      </CrearC>
    </ContForm>
  );
};

export default Login;
