import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FacebookButton from "@/components/login/facebookButton";
import GoogleButton from "@/components/login/googleButton";

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const showPass = () => {
      setShowPassword(!showPassword);
    };
  
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({ email: "", password: "" });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
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
            className="flex flex-col items-center justify-start gap-4 w-full h-full"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center azul-alternativa">Bienvenido</h1>
            <p className="textos text-center w-[80%] gris">
              Accede a tu cuenta para administrar propiedades, contratos,
              clientes y reportes desde un solo lugar. Optimiza tu gestión con
              herramientas diseñadas para profesionales del sector inmobiliario.
            </p>

            <div className="flex flex-col items-start px-4 gap-2 w-[85%] mt-2">
              <label className="textos gris">Correo Electronico</label>
              <input
                type="text"
                className="bg-transparent textos-14 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF]"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col items-start px-4 gap-2 w-[85%] mt-2">
              <label className="textos gris">Password</label>
              <input
                type={"password"}
                className="bg-transparent textos-14 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF]"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between w-[85%] px-4 mt-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="" id="" />
                <label className="textos-peques azul-fb">Recuerdame</label>
              </div>

              <Link to={"/forgot-password"} className="text-[#0556BF] textos-peques">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-azul-alternativa hover:bg-[#1E4483] transition-colors duration-400 w-[80%] negro textos-20 rounded-[99px] py-4 flex items-center justify-center h-[40px] textos blanco !font-bold"
            >
              Ingresar
            </button>

            <Link to={"/register"} className="textos-peques gris flex justify-start w-[80%] gap-2">
              ¿No tienes una cuenta?{" "}
              <span className="azul-fb">Crea la tuya aquí</span>
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

export default FormLogin