import React from 'react'
import SearchInput from '@/components/Inputs/SearchInput'
import DateInput from '@/components/Inputs/DateRangePicker'
import Notifications from '@/components/notifications'
import { Link } from 'react-router-dom'
const HeaderSearchDate = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
            <SearchInput placeholder="Buscar..." width="347px" route="/svg/inputs/search.svg"/>
            <DateInput placeholder="Buscar..." width="347px" route="/svg/inputs/calendar.svg"/>
            <button className='flex items-center justify-center gap-2 bg-[#0556BF] rounded-[8px] px-4 py-2 inter-16 blanco'>
                Aplicar Filtros
            </button>
        </div>

        <div className='flex items-center justify-end gap-4'>
            <Notifications />

            <Link to={'/profile'} className='flex items-center justify-center gap-2'>
               <img src="/svg/avatar/default.svg" className="rounded-full object-cover object-center w-[51px]" />
               <img src="/svg/avatar/bottom-arrow.svg" className="rounded-full object-cover object-center w-[15px]" />
            </Link> 
        </div>
    </div>
  )
}

export default HeaderSearchDate