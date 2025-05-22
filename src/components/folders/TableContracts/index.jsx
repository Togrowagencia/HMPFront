import React from 'react'
import { Link } from 'react-router-dom'
import Data from '@/data/transactions'
const  Table  = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 '>

        <div className='flex justify-start items-center gap-2 border-b pb-2 px-8'>
            <p className='inter-16 gris w-full'>Contratos</p>
        </div>

        <div className='flex flex-col justify-start gap-2 w-full'>
            {
                Data.map((item, index) => (
                    <div className={`flex justify-start items-center gap-2 py-2 px-8 ${index % 2 == 0 ? 'bg-[#F9F9F9]' : ''} w-full`} key={index}>
                        <p className='inter-16 gris w-[80%]'>{item.nombre_propiedad}</p>
                        <button className='px-2 py-1 blanco bg-azul w-max flex items-center justify-center gap-1 rounded-[5px] inter-13'>
                            <img src="/svg/folders/signed.svg" alt="" />
                            Firmar
                        </button>
                        <Link to="" className='inter-16 gris w-max'><img src="/svg/transactions/eye.svg" alt="" /></Link>
                    </div>
                )).slice(0, 4)
            }
        </div>
    </div>
  )
}

export default Table; 