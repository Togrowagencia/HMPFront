import React, {useState} from 'react'
import { Modal } from 'antd';
import TextAreaLabel from '@/components/Inputs/TextAreaLabel'
const modalTaskDescription = ({modal2Open, setModal2Open, task}) => {
  return (
    <>
        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 task flex flex-col gap-6`}>

                    {/**Header */}
                    <div className='flex items-center justify-end'>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>
                    {/**END::Header */}

                    {/**Avatar */}
                    <div className='flex items-center justify-start gap-2'>
                        <img src={task?.user?.photoUrl || '/svg/avatar/default.svg'} className="w-[67px] h-[67px] rounded-full object-center object-cover" />
                        <div className='w-full flex flex-col gap-2'>
                            <div className='border-b border-b-[#EEE] w-full flex items-center justify-between pb-1'>
                                <p className='inter-32 azul'>{task?.name || ''}</p>  
                                <p className='inter-18 bg-verde2 blanco px-2 py-1 rounded-[5px]'>{task?.state || ''}</p>
                            </div>
                            <p className='inter-16 gris !font-bold'>{task?.user?.name || ''}</p>
                        </div>
                    </div>
                    {/**END::AVATAR*/}
                    
                    <TextAreaLabel value={task?.description || ''} handleChange={() => {}} label="Descripcion de la tarea" width="100%" height={'101px'}/>

                    <div className='flex items-center justify-end gap-4'>
                        <button className='flex items-center justify-center bg-verde2 rounded-[5px] blanco inter-16 h-[32px] w-[110px] mr-[3%]'>
                            Confirmar
                        </button>
                    </div>
                </div>         
        </Modal>
    </>
  )
}

export default modalTaskDescription