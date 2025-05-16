import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FacebookButton from "@/components/login/facebookButton";
import GoogleButton from "@/components/login/googleButton";
import InputRegister from "@/components/registro/inputRegister";

const FormRegister = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { email, password } = formData;
  
      if (!email.trim() || !password.trim()) {
        showAlert("Error", "Incomplete fields");
        return;
      }
  
      try {
        const response = await axios.post("auth/login", {
          username: email,
          password,
        });
  
        const { data } = response;
        if (data?.token) {
          localStorage.setItem("authResponse", JSON.stringify(data));
          navigate("/dashboard");
        }
      } catch (error) {
        const errMsg = error?.response?.data;
  
        if (
          errMsg ===
          "invalid credentials: authentication error: JIFU responded 401"
        ) {
          showAlert("Error", "Incorrect data");
        } else {
          showAlert("Error", "An unexpected error occurred. Please try again.");
          console.error(error);
        }
      }
    };
  return (
    <form
      action=""
      className="flex flex-col items-center justify-start gap-8 w-full h-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center azul-alternativa">Registrate ahora</h1>
      <p className="textos text-center w-full gris">
      Regístrate gratis y empieza a administrar propiedades, contratos y clientes de forma centralizada. Nuestra plataforma está diseñada para profesionales inmobiliarios que buscan agilidad, control y resultados.
      </p>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        <InputRegister type={'text'} name={'name'} value={name} handleChange={(e) => setName(e.target.value)} label={'Nombre'} width={'48%'}/> 
        <InputRegister type={'text'} name={'phone'} value={phone} handleChange={(e) => setPhone(e.target.value)} label={'Telefono'} width={'48%'}/> 
        <InputRegister type={'email'} name={'email'} value={email} handleChange={(e) => setEmail(e.target.value)} label={'Correo Electronico'} width={'48%'}/> 
        <InputRegister type={'text'} name={'city'} value={city} handleChange={(e) => setCity(e.target.value)} label={'Ciudad'} width={'48%'}/> 
        <InputRegister type={'password'} name={'password'} value={password} handleChange={(e) => setPassword(e.target.value)} label={'Contraseña'} width={'100%'}/> 
      </div>
      <button
        type="submit"
        className="bg-azul-alternativa hover:bg-[#1E4483] transition-colors duration-400 w-[95%] negro textos-20 rounded-[99px] py-4 flex items-center justify-center h-[40px] textos blanco !font-bold"
      >
        Crear cuenta
      </button>
      <Link to={"/login"} className="textos-peques gris flex justify-center w-full gap-2">
        ¿Ya tienes una cuenta?{" "}
        <span className="azul-fb">Inicia sesión aquí</span>
      </Link>
      {/**Links de google */}
        {/**Separador */}
        <div className="flex items-center justify-center w-full gap-4">
          <span className="bg-gris2 h-[1px] w-[35%]" />
          <p className="gris2">O</p>
          <span className="bg-gris2 h-[1px] w-[35%]" />
        </div>
        <div className="flex gap-2 w-[100%] items-center justify-center">
          <FacebookButton />
          <GoogleButton />
        </div>
      {/**END::Links de google */}
    </form>
  )
}

export default FormRegister