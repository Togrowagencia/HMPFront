import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '@/components/Inputs/SearchInput'
import SelectHeaders from '@/components/Inputs/SelectHeaders'
import DateInput from '@/components/Inputs/DateRangePicker'
import Data from '@/data/transactions'
const  Table  = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 bg-white rounded-lg shadow-md pt-[32px] pl-[58px]'>
        <div className='w-full h-[60px] flex items-center justify-start px-4 gap-4'>
            <SearchInput placeholder="Filtra por nombre" width="220px" route="/svg/inputs/search.svg"/>
            <DateInput width="250px" route="/svg/inputs/calendar.svg"/>
            <SelectHeaders value={''} placeholder="Filtra por colaborador" width="260" icon=""/>
        </div>

        <div className='flex justify-start items-center gap-2 border-b pb-2 px-8'>
            <p className='inter-16 gris w-[20%]'>Nombre y apellidos</p>
            <p className='inter-16 gris w-[20%]'>Empresa/Usuario</p>
            <p className='inter-16 gris w-[20%]'>Correo electronico</p>
            <p className='inter-16 gris w-[20%]'>Tipo de usuario</p>
            <p className='inter-16 gris w-[20%]'>Editar</p>
        </div>

        <div className='flex flex-col justify-start gap-2'>
            {
                Data.map((item, index) => (
                    <div className={`flex justify-start h-[25px] items-center gap-2 px-8 ${index % 2 == 0 ? 'bg-[#F9F9F9]' : ''}`} key={index}>
                        <p className='inter-16 gris w-[20%]'>{item.nombre_propiedad}</p>
                        <p className='inter-16 gris w-[20%]'>{item.colaborador}</p>
                        <p className='inter-16 gris w-[20%]'>{item.tipo_transaccion}</p>
                        <p className='inter-16 gris w-[20%]'>{item.estado}</p>
                        <Link to="" className='inter-16 gris w-[20%]'><img src="/svg/users/editar.svg" alt="" /></Link>
                    </div>
                )).slice(0, 3)
            }
        </div>
    </div>
  )
}

export default Table; 