import { Link } from "react-router-dom";
import React from "react";

const Recuperar = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className='w-[99%] h-[97vh] rounded-[35px] bg-[url("/images/fondo-recuperar.png")] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center relative'>
        <div className="w-[45%] h-[50%] rounded-[35px] flex-col flex border-[3px] border-[#0556BF] items-center lp:h-[38vh] bg-blanco">
          <div className=" h-full flex flex-col justify-center items-center gap-4">
            <h2 className="azul-fb flex text-center">Recupera tu contraseña</h2>
            <p className="textos gris flex text-center px-[15%]">
              Ingresa tu correo electronico y recibiras un enlace para recuperar
              el acceso a la plataforma
            </p>

            <form className="w-[65%] mt-10 h-[20%] flex flex-col justify-center items-center">
              <div className=" w-full flex justify-start items-center">
                <p className="textos gris flex text-left py-[1.8%] mx-1.5">
                  Correo electrónico
                </p>
              </div>
              <div className="flex w-full border py-2 gap-1 rounded-[50px] border-[#0556BF]">
                <img
                  src="/svg/reset/correo.svg"
                  alt=""
                  className="mx-2 w-[4.9%]"
                />
                <input
                  type="email"
                  className="textos gris w-[86%]"
                />
              </div>

              <button
                type="submit"
                className="w-full text-center azul-fb textos blanco my-3 py-3 rounded-[82px] bg-azul-alternativa hover:bg-[#1E4483] transition-colors duration-400 !font-bold "
              >
                <Link to={"/reset-password"} className="text-center blanco textos">
                  Recuperar contraseña
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
