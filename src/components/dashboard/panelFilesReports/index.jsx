import React from 'react'
import { Link } from 'react-router-dom'
const PanelReportsFiles = ({title,icon,description, value, percentaje, link}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 w-full h-[50%] flex flex-col items-start justify-end gap-4 relative'>
        <Link to={link} className='absolute top-4 right-4'>
            <img src="/svg/dashboard/goAzul.svg" alt="" />
        </Link>
        <p className='flex items-center justify-start gap-2'>
            <img src={icon} alt="" />
            <span className='inter-18 azul-alternativa'>{title}</span>
        </p>
        <div className='flex justify-between items-center gap-4 w-full'>
            <p className='inter-16 azul-alternativa flex items-center justify-start gap-2'>
                {description}
                <span className='inter-16 blanco bg-azul-alternativa rounded-[5px] px-2 py-1'>{value}</span>
            </p>

            <p className={`${percentaje >= 0 ? 'verde2' : 'rojo'}`}>{percentaje >= 0 ? '+' : ''}{percentaje}%</p>
        </div>
    </div>
  )
}

export default PanelReportsFiles