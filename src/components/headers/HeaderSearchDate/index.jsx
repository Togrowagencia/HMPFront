import React from 'react'
import SearchInput from '@/components/Inputs/SearchInput'
import DateInput from '@/components/Inputs/DateRangePicker'
const HeaderSearchDate = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-2'>
            <SearchInput placeholder="Buscar..." width="347px" route="/svg/inputs/search.svg"/>
            <DateInput placeholder="Buscar..." width="347px" route="/svg/inputs/calendar.svg"/>
        </div>

        <div>

        </div>
    </div>
  )
}

export default HeaderSearchDate