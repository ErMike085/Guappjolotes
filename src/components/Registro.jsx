import {React, useState}  from 'react';
import { BotonIngresar, ContForm, ContImg, Inputs, Logo, Titulo } from '../styles/StyledLogin';


const Registro = () => {
    const [data, setData] = useState({
        usuario:"",
        contraseña:"",
        logueado:false
    })
    const {usuario,contraseña, logueado } = data
    const handleChange = ({target})=>{
        setData({
            ...data,
            [target.name]: target.value
        })
    }
    

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleClick = ()=>{
        data.logueado = true
        localStorage.setItem('Usuario', JSON.stringify(data));
        
    }

  return (
    <ContForm onSubmit={handleSubmit}>
    <Titulo>Registro</Titulo>
    <ContImg><Logo src="https://res.cloudinary.com/dlkynkfvq/image/upload/v1642714828/guappjolota/Ilustraci%C3%B3n_sin_t%C3%ADtulo_66_1_hgez7k.png" alt="Logo" /></ContImg>
    <Inputs type="email" name="usuario"onChange={handleChange}  placeholder='Ingresa tu correo'required/>
    <Inputs type="password" name="contraseña" onChange={handleChange} placeholder='Crea un contraseña'required/>
    <BotonIngresar onClick={()=> handleClick()}>Registrarse</BotonIngresar>
</ContForm>
  );
};

export default Registro;