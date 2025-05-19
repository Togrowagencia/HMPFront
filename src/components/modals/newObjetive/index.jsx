import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'

const NewObjetive  = () => {
    const [modal2Open, setModal2Open] = useState(false);
    
  return (
    <>
        <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setModal2Open(true)}>
            <img src="/svg/dashboard/goVerde.svg" className="" />
        </div>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 office`}>
                    <div className='mb-5 flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Obejtivo de ventas</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full'>
                        <InputText type="text" name="name" value="" handleChange={() => {}} label="Oficina 1" width="48%"/>
                        <InputText type="text" name="address" value="" handleChange={() => {}} label="Oficina 2" width="48%"/>
                        <InputText type="text" name="phone" value="" handleChange={() => {}} label="Oficina 3" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={() => {}} label="Oficina 4" width="48%"/>
                        
                        <p className='verde2 inter-32 ml-[3%]'>Total: $10,000</p>
                        <button className='flex items-center justify-center bg-verde2 rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                            Confirmar
                        </button>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default NewObjetive 