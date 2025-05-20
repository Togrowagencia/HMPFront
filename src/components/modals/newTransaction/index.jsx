import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'
import SelectLabel from '@/components/Inputs/SelectLabel'
const modalOffice = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [isPercentaje, setIsPercentaje] = useState(false);

  return (
    <>
        <div className='w-[35%] cursor-pointer flex items-end pl-[32px] pb-[22px] gap-4 bg-[#752ED3] rounded-[10px] relative' onClick={() => setModal2Open(true)}>
          <p className='blanco inter-32'>Crear transaccion nueva</p>
          <div className='absolute bottom-0 right-0 bg-[#F9F9F9] h-[50px] w-[60px] rounded-tl-lg flex items-center justify-center'>
            <button className='bg-[#752ED3] inter-32 blanco rounded-[10px] w-[38px] h-[38px] text-center flex items-center justify-center'>
              +
            </button> 
          </div>
        </div>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 transaction`}>
                    <div className='mb-5 flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Nueva Oficina</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full '>
                        <InputText type="text" name="name" value="" handleChange={() => {}} label="Propiedad" width="48%"/>
                        <InputText type="text" name="address" value="" handleChange={() => {}} label="Direccion de la propiedad" width="48%"/>
                        <InputText type="text" name="phone" value="" handleChange={() => {}} label="Ciudad" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={() => {}} label="Precio de venta o alquiler" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={() => {}} label="Contacto" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Tipo de transaccion" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Representacion" width="48%"/>

                        <div className='w-[48%] flex items-end justify-center gap-2'>
                            <InputText type="text" name="address" value="" handleChange={() => {}} label="Comision" width="80%"/>
                            <button className={`flex items-center justify-center rounded-full w-[55px] h-[45px] ${!isPercentaje ? 'bg-azul-alternativa' : 'bg-gris'}`} onClick={() => setIsPercentaje(false)}>
                                <img src="/svg/transactions/dolar.svg" alt="" />
                            </button>
                            <button className={`flex items-center justify-center rounded-full w-[55px] h-[45px] ${isPercentaje ? 'bg-azul-alternativa' : 'bg-gris'}`} onClick={() => setIsPercentaje(true)}>
                                <img src="/svg/transactions/percentaje.svg" alt="" />
                            </button>
                        </div>


                        <div className='w-full flex items-center justify-end gap-2'>
                            <button className='flex items-center justify-center bg-verde2 rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default modalOffice