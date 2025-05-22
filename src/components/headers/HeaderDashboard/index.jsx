import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '@/components/Inputs/SearchInput'
import DateInput from '@/components/Inputs/DateRangePicker'
import SelectHeaders from '@/components/Inputs/SelectHeaders'
import Notifications from '@/components/notifications'
import NewOffice from '@/components/modals/newOffice'
import NewUser from '@/components/modals/newUser'
const HeaderDashboard = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
            <SearchInput placeholder="Buscar..." width="347px" route="/svg/inputs/search.svg"/>
            <DateInput width="347px" route="/svg/inputs/calendar.svg"/>
            <SelectHeaders placeholder="Sede" width="347px" icon="/svg/inputs/calendar.svg"/>
        </div>

        <div className='flex items-center justify-end gap-2'>
            <NewUser isButton={true}/>
            <NewOffice />
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

export default HeaderDashboard