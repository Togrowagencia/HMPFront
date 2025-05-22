import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'
import SelectLabel from '@/components/Inputs/SelectLabel'
import DragUpload from '@/components/Inputs/DragUpload'
import TableFiles from '@/components/folders/TableFiles'
import TableContracts from '@/components/folders/TableContracts'

const NewFolder = () => {
    const [modal2Open, setModal2Open] = useState(false);
    
  return (
    <>
        <div className='w-[35%] cursor-pointer flex items-end pl-[32px] pb-[22px] gap-4 bg-[#EB6450] rounded-[10px] relative' onClick={() => setModal2Open(true)}>
            <p className='blanco inter-32'>Crear carpeta nueva</p>
            <div className='absolute bottom-0 right-0 bg-[#F9F9F9] h-[50px] w-[60px] rounded-tl-lg flex items-center justify-center'>
                <button className='bg-[#EB6450] inter-32 blanco rounded-[10px] w-[38px] h-[38px] text-center flex items-center justify-center'>
                +
                </button> 
            </div>
        </div>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`px-4 py-2 folders flex flex-col items-center justify-start gap-4 overflow-y-scroll`}>
                    <div className='mb-5 flex items-center justify-between w-full'>
                        <p className='inter-32 azul-alternativa'>Nueva carpeta</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full'>
                        <InputText type="text" name="name" value="" handleChange={() => {}} label="Nombre de la carpeta" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="¿Quien puede ver?" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Nombre de la transaccion" width="48%"/>
                    </div>

                    <div className='flex flex-wrap justify-between items-start gap-4 w-full'>
                        <DragUpload value="" handleChange={() => {}} label="Nombre de la transaccion" width="48%"/>
                        <DragUpload value="" handleChange={() => {}} label="Nombre de la transaccion" width="48%"/>
                    </div>

                    <div className='w-full'>
                        <TableFiles/>
                    </div>

                    <div className='w-full'>
                        <TableContracts/>
                    </div>

                    <div className='w-full flex justify-end items-center gap-4'>
                        <button className='flex items-center justify-center bg-verde2 rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                            Confirmar
                        </button>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default NewFolder