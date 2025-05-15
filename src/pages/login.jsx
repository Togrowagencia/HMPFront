import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import FacebookButton from '@/components/login/facebookButton'
import GoogleButton from '@/components/login/googleButton'
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showPass = () => {
    setShowPassword(!showPassword)
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      showAlert('Error', 'Incomplete fields');
      return;
    }

    try {
      const response = await axios.post('auth/login', {
        username: email,
        password,
      });

      const { data } = response;
      if (data?.token) {
        localStorage.setItem('authResponse', JSON.stringify(data));
        navigate('/dashboard');
      }
    } catch (error) {
      const errMsg = error?.response?.data;

      if (errMsg === 'invalid credentials: authentication error: JIFU responded 401') {
        showAlert('Error', 'Incorrect data');
      } else {
        showAlert('Error', 'An unexpected error occurred. Please try again.');
        console.error(error);
      }
    }
  };


  return (
    <div className='w-screen h-screen flex justify-between'>
      {/**form */}
      <div className='w-[45%] h-full flex flex-col items-center justify-center'>

        <div className='w-[75%] h-full flex flex-col items-center justify-center gap-10 '>

          <img src="/images/logo-completo.png" alt="" className=''/>

          <form action="" className='flex flex-col items-center justify-center gap-4 w-full' onSubmit={handleSubmit}>
            
            <p className='inter-64 text-center azul'>Bienvenido</p>
            <p className='inter-16 text-center w-[80%] gris'>Accede a tu cuenta para administrar propiedades, contratos, clientes y reportes desde un solo lugar. Optimiza tu gestión con herramientas diseñadas para profesionales del sector inmobiliario.</p>

              <div className='flex flex-col items-start px-4 gap-2 w-full mt-2'>
                <label className="inter-16 gris">Correo Electronico</label>
                <input type="text" className='bg-transparent textos-14 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF]' name="email" value={formData.email} onChange={handleChange}/>
              </div>

              <div className='flex flex-col items-start px-4 gap-2 w-full mt-2'>
                <label className="inter-16 gris">Password</label>
                <input type={'password'} className='bg-transparent textos-14 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF]' name="password" value={formData.password} onChange={handleChange}/>
              </div>

              <div className='flex items-center justify-between w-full px-4 mt-2'>
                <div className='flex items-center gap-1'>
                  <input type="checkbox" name="" id="" />
                  <label className="inter-16 azul">Recuerdame</label>
                </div>

                <Link to={'/forgot-password'} className='text-[#0556BF] inter-16'>¿Olvidaste tu contraseña?</Link>
              </div>


              <button type='submit' className='bg-azul w-full negro textos-20 rounded-[99px] py-4 flex items-center justify-center h-[40px] inter-16 blanco !font-extrabold'>
                Ingresar
              </button>

              <p className='inter-13 gris flex justify-start w-full gap-2'>¿No tienes una cuenta? <span className='azul'>Crea la tuya aquí</span></p>

              {/**Links de google */}
                {/**Separador */}
                <div className='flex items-center justify-center w-full gap-4'>
                  <span className='bg-gris h-[1px] w-[35%]'/>
                    <p className='gris'>O</p>
                  <span className='bg-gris h-[1px] w-[35%]'/>
                </div>

              <div className='flex gap-2'>
                <FacebookButton />
                <GoogleButton />
              </div>
              {/**END::Links de google */}
          </form>
        </div>
      </div>

      {/**Background */}
      <div className='w-[53%] h-full flex flex-col items-center justify-center'>
        <div className='bg-degradado-azul w-full h-[758px] rounded-s-[25px] flex justify-end items-bottom'>
          <img src="/images/login-bg-image.png" className="" />
        </div>
      </div>
    </div>
  )
}

export default Login;
