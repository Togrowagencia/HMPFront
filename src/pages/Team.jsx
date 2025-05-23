import React from 'react'
import HeaderSearch from '@/components/headers/HeaderSearch'
import Banner from '@/components/banner'
import NewOffice from '@/components/modals/newOffice'
import Kanvan from '@/components/team/Kanvan'

const Team = () => {
  return (
    <div className='h-full flex flex-col w-full gap-10 '>
        <HeaderSearch />
        <div className="flex gap-4">
            <div className='w-[65%] flex gap-4'>
              <Banner title={'EQUIPO DE TRABAJO'} description={''} backgroundImage="/images/background-morado.png" image={''} bottom={'-50px'} right={'51px'}/>
            </div>
            <NewOffice isButton={false}/>
        </div>

        <div className="flex h-full gap-4">
            <Kanvan />
        </div>
    </div>
  )
}

export default Team