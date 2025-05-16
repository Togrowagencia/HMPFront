import React from 'react'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const googleButton = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

  return (
    <button type='button' className='bg-gris-claro h-[40px] rounded-[50px] flex gap-2 items-center px-4' onClick={() => login()}>
      <img src="/svg/login/google.svg" className="w-[20px]" />
      <p className='inter-16 negro-claro'>Ingresa con Google</p>
    </button>
  )
}

export default googleButton