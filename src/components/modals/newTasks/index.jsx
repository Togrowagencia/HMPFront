import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'
import SelectLabel from '@/components/Inputs/SelectLabel'
import DatePicker from '@/components/Inputs/DatePicker'
import TextAreaLabel from '@/components/Inputs/TextAreaLabel'
const modalTasks = () => {
    const [modal2Open, setModal2Open] = useState(true);
  return (
    <>
        <div className='w-[35%] cursor-pointer flex items-end pl-[32px] pb-[22px] gap-4 bg-blanco border border-[#3ED7A7] rounded-[10px] relative' onClick={() => setModal2Open(true)}>
          <p className='azul inter-32'>Crear transaccion nueva</p>
          <div className='absolute bottom-[-1px] right-[-1px] border-l border-t border-[#3ED7A7] bg-[#F9F9F9] h-[50px] w-[60px] rounded-tl-lg flex items-center justify-center'>
            <button className='bg-[#3ED7A7] inter-32 blanco rounded-[10px] w-[38px] h-[38px] text-center flex items-center justify-center'>
              +
            </button> 
          </div>
        </div>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 transaction`}>
                    <div className='mb-5 flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Nueva Tarea</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full '>
                        <InputText type="text" name="name" value="" handleChange={() => {}} label="Titulo de la tarea " width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Asignar a colaborador" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Prioridad de la tarea" width="48%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Estado de la tarea" width="48%"/>
                        <DatePicker width="48%" label={'Fecha de la tarea'}/>
                        <TextAreaLabel value="" handleChange={() => {}} label="Estado de la tarea" width="100%" height={'101px'}/>


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

export default modalTasks