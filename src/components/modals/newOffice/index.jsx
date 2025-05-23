import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'
const modalOffice = ({isButton}) => {
    const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
        {
            isButton ?
            <button className='flex items-center bg-verde2 p-2 rounded-[5px]' onClick={() => setModal2Open(true)}>
                <p className='inter-16 blanco'>Agregar oficina</p>
            </button>
            : 
            <div className='w-[35%] cursor-pointer flex items-end pl-[32px] pb-[22px] gap-4 bg-[#EB6450] rounded-[10px] relative' onClick={() => setModal2Open(true)}>
                <p className='blanco inter-32'>Crear nueva oficina</p>
                <div className='absolute bottom-0 right-0 bg-[#F9F9F9] h-[50px] w-[60px] rounded-tl-lg flex items-center justify-center'>
                    <button className='bg-[#EB6450] inter-32 blanco rounded-[10px] w-[38px] h-[38px] text-center flex items-center justify-center'>
                    +
                    </button> 
                </div>
            </div>
        }

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 office`}>
                    <div className='mb-5 flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Nueva Oficina</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full'>
                        <InputText type="text" name="name" value="" handleChange={() => {}} label="Nombre de la sede" width="48%"/>
                        <InputText type="text" name="address" value="" handleChange={() => {}} label="Correo electronico" width="48%"/>
                        <InputText type="text" name="phone" value="" handleChange={() => {}} label="Direccion" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={() => {}} label="Telefono" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={() => {}} label="Definir objetivo de ventas de sede" width="48%"/>
                        <button className='flex items-center justify-center bg-verde2 rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                            Confirmar
                        </button>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default modalOffice