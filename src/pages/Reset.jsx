import React, { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [conditions, setConditions] = useState({
    lengthValid: false,
    numberValid: false,
    specialValid: false,
    coincide: false,
  });

  const [activeCount, setActiveCount] = useState(0);
  const [leavingCount, setLeavingCount] = useState(0);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const lengthValid = newPassword.length >= 8;
    const numberValid = /\d/.test(newPassword);
    const specialValid = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const coincide = newPassword === password2;

    setConditions((prev) => ({
      ...prev,
      lengthValid,
      numberValid,
      specialValid,
      coincide,
    }));

    const newCount =
      Number(lengthValid) + Number(numberValid) + Number(specialValid);

    if (newCount < activeCount) {
      setLeavingCount(activeCount - newCount);
      setTimeout(() => setLeavingCount(0), 400);
    }
    setActiveCount(newCount);
  };

  const handlePasswordChange2 = (e) => {
    const newPassword2 = e.target.value;
    setPassword2(newPassword2);
    const coincide = newPassword2 === password;
    setConditions((prev) => ({ ...prev, coincide }));
  };

  const getSVG = (type) =>
    type === "check" ? (
      <img src="\svg\reset\correcto.svg" alt="" />
    ) : type === "error" ? (
      <img src="\svg\reset\incorrecto.svg" alt="" />
    ) : null;

  const getSVGinput = (type) =>
    type === "check" ? (
      <img src="\svg\login\passv.svg" alt="" className="w-[4%]" />
    ) : type === "error" ? (
      <img src="\svg\login\pass.svg" alt="" className="w-[4%]" />
    ) : null;

  const getColor = () => {
    if (activeCount === 3) return "bg-verde1 verde1";
    if (activeCount === 2) return "bg-advertencia2 advertencia2";
    if (activeCount === 1) return "bg-advertencia advertencia";
    if (activeCount === 0) return "bg-salmon salmon";
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[97%] h-[95.5vh] rounded-[35px] bg-[url('/images/imagen-reset.png')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-[46.3%] h-[71.4%] lp:h-[55vh] lpm:h-[50vh] bg-blanco border-[3px] border-[#0556BF] rounded-[35px] flex flex-col justify-center items-center px-[7.5%] py-[4.5%]">
          <div className="flex flex-col justify-center items-center gap-[8%] w-full h-[20%]">
            <h2 className="azul-fb text-center my-4">Restablecer Contraseña</h2>
            <p className="textos gris text-center">
              Ingresa tu correo electronico y recibiras un enlace para recuperar
              el acceso a la plataforma
            </p>
          </div>

          <div className="w-full h-[90%] flex flex-col justify-center items-start gap-[4%]">
            <form className="w-full h-full flex flex-col justify-start mt-8 gap-[2%]">
              <p className="gris textos">Nueva Contraseña</p>
              <div className="border rounded-[50px] border-[#B5B5B5] w-full h-[11%] pl-[10px] flex flex-row justify-between items-center bg-fondo">
                {conditions.lengthValid &&
                conditions.numberValid &&
                conditions.specialValid
                  ? getSVGinput("check")
                  : getSVGinput("error")}
                <input
                  type={showPassword ? "text" : "password"}
                  className="textos gris w-[85%] flex pl-2"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <img
                  src="\svg\login\eye.svg"
                  alt=""
                  onClick={togglePassword}
                  className="cursor-pointer mx-6 flex justify-center items-center"
                />
              </div>

              <div className="mb-[10px] flex gap-1">
                {/* Barras activas */}
                {[...Array(activeCount)].map((_, i) => (
                  <div
                    key={`active-${i}`}
                    className={`${getColor()} custom-confirm h-[4px] rounded-full`}
                  />
                ))}

                {/* Barras salientes */}
                {[...Array(leavingCount)].map((_, i) => (
                  <div
                    key={`leaving-${i}`}
                    className={`${getColor()} custom-confirm shrink h-[4px] rounded-full`}
                  />
                ))}
              </div>

              <div>
                <p
                  className={`p-reset textos-peques salmon ${
                    conditions.lengthValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.lengthValid ? getSVG("check") : getSVG("error")} 8
                  caracteres
                </p>
                <p
                  className={`p-reset textos-peques salmon ${
                    conditions.numberValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.numberValid ? getSVG("check") : getSVG("error")}{" "}
                  Debe contener al menos un numero
                </p>
                <p
                  className={`p-reset textos-peques salmon ${
                    conditions.specialValid ? "valid" : "invalid"
                  }`}
                >
                  {conditions.specialValid ? getSVG("check") : getSVG("error")}{" "}
                  Debe contener al menos un caracter especial
                </p>
              </div>

              <p className="gris textos">Confirmar contraseña</p>
              <div className="border rounded-[50px] border-[#B5B5B5] w-full h-[11%] pl-[10px] mb-[10px] flex flex-row justify-between items-center bg-fondo">
                {conditions.coincide
                  ? getSVGinput("check")
                  : getSVGinput("error")}
                <input
                  type={showPassword ? "text" : "password"}
                  className="textos gris w-[85%] flex pl-2"
                  name="password2"
                  value={password2}
                  onChange={handlePasswordChange2}
                />
                <img
                  src="\svg\login\eye.svg"
                  alt=""
                  onClick={togglePassword}
                  className="cursor-pointer mx-6 flex justify-center items-center"
                />
              </div>
              <div>
                <p
                  className={`p-reset textos-peques ${
                    conditions.coincide ? "valid" : "invalid"
                  }`}
                >
                  {conditions.coincide ? getSVG("check") : getSVG("error")} La
                  contraseña coincide
                </p>
              </div>

              <div className="flex items-center justify-start gap-[2%] w-full">
                <button className="w-[50%] py-3 px-4 text-center bg-azul-alternativa  hover:bg-[#1E4483] transition-colors duration-300 textos blanco mt-5 rounded-[20px]">
                  Restablecer contraseña
                </button>
                <Link
                  to="/"
                  className="w-[50%] py-3 px-4 text-center textos blanco mt-5 p-2 rounded-[35px] bg-gris2 hover:bg-[#717171] transition-colors duration-300"
                >
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
