import React, {useState} from 'react'
import { Modal } from 'antd';
import SelectLabel from '@/components/Inputs/SelectLabel'
import DateMonthPicker from '@/components/Inputs/DateMonthPicker'

const NewReport = () => {
    const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
        <div className='w-[35%] cursor-pointer flex items-end pl-[32px] pb-[22px] gap-4 bg-salmon rounded-[10px] relative' onClick={() => setModal2Open(true)}>
          <p className='blanco inter-32'>Crear nuevo reporte</p>
          <div className='absolute bottom-[-1px] right-[-1px] bg-[#F9F9F9] h-[50px] w-[60px] rounded-tl-lg flex items-center justify-center'>
            <button className='bg-salmon inter-32 blanco rounded-[10px] w-[38px] h-[38px] text-center flex items-center justify-center'>
              +
            </button> 
          </div>
        </div>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 reports`}>
                    <div className='mb-5 flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Reporte</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>

                    <div className='flex flex-wrap justify-between items-end gap-4 w-full '>
                        <DateMonthPicker width="100%" label={'Fecha de la tarea'}/>
                        <SelectLabel value="" handleChange={() => {}} label="Oficina o Colaborador" width="100%"/>
                        <SelectLabel value="" handleChange={() => {}} label="Oficina/Colaborador" width="100%"/>

                        <div className='w-full flex items-center justify-start gap-2 pl-4'>
                            <button className='flex items-center justify-center bg-azul rounded-[5px] blanco inter-16 h-[32px] w-[110px]'>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default NewReport