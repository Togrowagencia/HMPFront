import React from 'react'
import { Link } from 'react-router-dom'
import Notifications from '@/components/notifications'

const HeaderDashboard = () => {
  return (
    <div className='flex items-center justify-end'>
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