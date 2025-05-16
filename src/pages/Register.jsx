import React from 'react'
import Form from "@/components/registro/Form";

const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-between items-center">
      {/**Background */}
      <div className="w-[55%] h-full flex flex-col items-start justify-start">
        <img
          src="/images/bg-register-img.png"
          className="h-[90vh] w-full object-cover"
        /> 
      </div>
      {/**form */}
      <div className="w-[45%] h-screen flex flex-col items-center justify-center">
        <div className="w-[70%] h-[82%] flex flex-col items-center justify-center gap-10 ">
          <img
            src="/images/logo-completo.png"
            alt=""
            className="w-[250px]"
          />

          <Form />          
        </div>
      </div>
    </div>
  )
}

export default Register