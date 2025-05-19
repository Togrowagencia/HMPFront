import React, {useState} from 'react'
import { Modal } from 'antd';
import InputText from '@/components/Inputs/InputTextLabel'
import InputPhoto from '@/components/Inputs/InputPhoto'
import Switch from '@/components/Inputs/switch'
const modalUsers = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [name, setName] = useState("");
    const [cargo, setCargo] = useState("");
  return (
    <>
        <button className='flex items-center bg-azul-alternativa p-2 rounded-[5px]' onClick={() => setModal2Open(true)}>
            <p className='inter-16 blanco'>Crear Usuarios</p>
        </button>

        <Modal title="" centered open={modal2Open} onOk={() => setModal2Open(false)} onCancel={() => setModal2Open(false)}>
                <div className={`w-full h-full px-4 py-2 users flex flex-col gap-6`}>

                    {/**Header */}
                    <div className='flex items-center justify-between'>
                        <p className='inter-32 azul-alternativa'>Nuevo Usuario</p>
                        <img src="/svg/modals/close-blue.svg" className="cursor-pointer" onClick={() => setModal2Open(false)}/>
                    </div>
                    {/**END::Header */}

                    {/**Avatar */}
                    <div className='flex items-center justify-start gap-2'>
                        <InputPhoto />
                        <div>
                            <p className='inter-18 azul-alternativa'>{name}</p>  
                            <p className='inter-16 azul-alternativa'>{cargo}</p>
                        </div>
                    </div>
                    {/**END::AVATAR*/}

                    {/**Inputs */}
                    <div className='flex flex-wrap justify-between items-end gap-4 w-full'>
                        <InputText type="text" name="name" value={name} handleChange={(e) => setName(e.target.value)} label="Nombres y apellidos" width="48%"/>
                        <InputText type="text" name="address" value="" handleChange={(e) => {}} label="Correo electronico" width="48%"/>
                        <InputText type="text" name="phone" value="" handleChange={(e) => setCargo(e.target.value)} label="Cargo" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={(e) => {}} label="Telefono" width="48%"/>
                        <InputText type="text" name="email" value="" handleChange={(e) => {}} label="Definir objetivo particular de ventas" width="100%"/>
                    </div>
                    {/**END::Inputs */}

                    {/**Permisos */}
                    <div className='flex flex-col gap-4'>
                        <p className='inter-18 azul-alternativa'>Permisos</p>
                        <div className='flex items-center justify-start flex-wrap gap-2'>
                            <Switch placeholder={'Crear Transacciones'} width={'31%'}/>
                            <Switch placeholder={'Ver base de datos '} width={'31%'}/>
                            <Switch placeholder={'Crear Checklist'} width={'31%'}/>
                            <Switch placeholder={'Asignar Tareas'} width={'31%'}/>
                            <Switch placeholder={'Editar Transacciones'} width={'31%'}/>
                            <Switch placeholder={'Crear Sedes'} width={'31%'}/>
                            <Switch placeholder={'Crear Colaborador '} width={'31%'}/>
                            <Switch placeholder={'Crear Tareas'} width={'31%'}/>
                        </div>
                    </div>
                    {/**END::Permisos */}

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

export default modalUsers