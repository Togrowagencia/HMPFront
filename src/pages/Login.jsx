import React from "react";
import Form from "@/components/login/Form";
export const Login = () => {

  return (
    <div className="w-screen h-screen flex justify-between items-center">
      {/**form */}
      <div className="w-[45%] h-screen flex flex-col items-center justify-center">
        <div className="w-[75%] h-[82%] flex flex-col items-center justify-center gap-10 ">
          <img
            src="/images/logo-completo.png"
            alt=""
            className="w-[38.5%] h-[14%]"
          />

          <Form />
        </div>
      </div>

      {/**Background */}
      <div className="w-[53%] h-full flex flex-col items-center justify-center relative">
        <img
          src="/images/login-bg-image2.png"
          className="absolute top-[0%] h-[92%] right-[0vh]"
        />
      </div>
    </div>
  );
};

export default Login;
