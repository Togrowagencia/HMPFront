import React from 'react'
import { Link } from 'react-router-dom'
import { propertiesTypes } from '@/data/propertiesTypes'
const PanelProperties = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 w-[50%] flex flex-col gap-6'>
           <div className='flex justify-between items-center'>
                <p className='inter-18 azul-alternativa flex items-center gap-2'>
                    <img src="/svg/sidebar/propiedades.svg" alt="" />
                    Gestión de propiedades
                </p>
                <Link to={'/properties'}>
                    <img src="/svg/dashboard/goAzul.svg" alt="" />
                </Link>
           </div> 

           <div className='flex flex-col justify-end gap-2'>

                <div className='flex justify-end items-center gap-4'>
                    <p className='inter-13 gris w-[60px] text-end'>Venta</p>
                    <p className='inter-13 gris w-[60px] text-end'>Alquiler</p>
                </div>

                {
                    propertiesTypes.map((item, index) => (
                        <div key={index} className='flex justify-end items-end gap-4 h-[25px]'>
                            <div className='w-[calc(100%_-_120px)] flex flex-col gap-2'>
                                <p className='inter-13 gris flex justify-between'>
                                    {item.tipo} 
                                    <span className='verde2 inter-11'>{item.porcentaje_cierres}</span>
                                </p>
                                <div className='w-full h-[2px] bg-gris rounded-full relative flex items-center'>
                                    <span className='h-[5px] bg-verde2 absolute rounded-full' style={{width: item.porcentaje_cierres}}></span>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <p className='inter-13 gris w-[60px] text-end'>{item.precio_venta}</p>
                                <p className='inter-13 gris w-[60px] text-end'>{item.precio_alquiler}</p>
                            </div>
                        </div>
                    ))
                }
           </div>
    </div>
  )
}

export default PanelProperties