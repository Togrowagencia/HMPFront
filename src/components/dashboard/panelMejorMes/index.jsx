import React from 'react'
import { propertiesTypes } from '@/data/propertiesTypes'
const panelMejorMes = () => {
  return (
    <div className='bg-[#1E4483] rounded-lg shadow-md p-8 w-[30%] flex flex-col gap-6'>

        <div className='flex justify-between items-center'>
            <p className='inter-18 blanco'>Mejor del mes</p>
            <img src="/svg/dashboard/stars.svg" alt="" />
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex items-center justify-start gap-2'>
                <img src="/svg/avatar/default.svg" className="rounded-full object-center object-cover" />
                <div>
                    <p className='inter-18 blanco'>Sara Garcia</p>  
                    <p className='inter-16 blanco'>Agente</p>
                </div>
            </div>
            <p className='bg-verde2 rounded-[5px] px-2 py-1 blanco'>$500.000</p>
        </div>

        <div className='flex flex-col gap-2 w-full'>
            <div className='flex justify-between'>
                <p className='inter-11 !font-normal blanco'>Nombre del proyecto</p>
                <p className='inter-11 !font-normal blanco'>Valor</p>
            </div>
            <div className='flex flex-col justify-start'>
                {
                    propertiesTypes.map((item, index) => (
                        <div className={`flex justify-between items-center rounded-[5px] px-2 py-1 ${index % 2 == 0 ? 'bg-azul-alternativa' : ''}`} key={index}>
                            <p className='inter-11 !font-normal blanco'>{item.tipo}</p>
                            <p className='inter-11 !font-normal blanco'>{item.precio_venta}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default panelMejorMes