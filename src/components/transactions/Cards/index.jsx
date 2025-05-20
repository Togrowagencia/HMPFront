import React from 'react'

const Cards = ({title,value,description}) => {
  return (
    <div className='bg-blanco rounded-lg shadow-md p-4 w-[33%] h-[119px] flex flex-col items-start justify-end gap-4'>
      <p className='inter-32 azul'>{title}</p>
      <div className='flex items-center gap-2 justify-start'>
        <p className='bg-verde2 px-2 py-1 blanco inter-18 rounded-[5px]'>{value}</p>
        <p className='verde2 inter-18'>{description}</p>
      </div>
    </div>
  )
}

export default Cards