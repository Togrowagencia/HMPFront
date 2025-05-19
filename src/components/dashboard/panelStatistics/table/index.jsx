import React from 'react'

const TableDashboard = ({title, color, clave, valor, data, isPrice}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <p className={`${color}`}>{title}</p>
        <div className='flex justify-between'>
            <p className='inter-11 gris'>{clave}</p>
            <p className='inter-11 gris'>{valor}</p>
        </div>
        <div className='flex flex-col justify-start'>
            {
                data.map((item, index) => (
                    <div className={`flex justify-between items-center rounded-[5px] px-2 py-1 ${index % 2 == 0 ? 'bg-[#F9F9F9]' : ''}`} key={index}>
                        <p className='inter-11 !font-normal gris'>{item.nombre}</p>
                        <p className='inter-11 !font-normal gris'>{item.valor}</p>
                    </div>
                )).slice(0, 3)
            }
        </div>
    </div>
  )
}

export default TableDashboard