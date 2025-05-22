import React from 'react'

const CardsUsers = ({title,value,icon, color}) => {
  return (
    <div className={`bg-${color || 'blanco'} rounded-lg shadow-md p-4 w-[33%] h-[119px] flex items-start justify-start gap-4`}>
        <div className='flex h-full items-center justify-center w-[15%]'>
            <img src={icon}/>
        </div>
        <div className={`flex flex-col items-start gap-2 justify-center h-full`}>
          <p className={`inter-32 ${color == 'verde2' ? 'blanco' : 'azul'}`}>{value}</p>
          <p className={`${color == 'verde2' ? 'blanco' : 'gris'} inter-18 rounded-[5px]`}>{title}</p>
        </div>
    </div>
  )
}

export default CardsUsers