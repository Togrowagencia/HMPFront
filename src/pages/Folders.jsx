import React from 'react'
import HeaderSearchDate from '@/components/headers/HeaderSearchDate'
import Banner from '@/components/banner'
import NewFolder from '@/components/modals/newFolder'
import Tabs from '@/components/folders/Tabs'

const Folders = () => {
  return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <HeaderSearchDate />

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Banner title={'ARCHIVOS'} description={''} backgroundImage="/images/background-azul.png" image={''} bottom={'-50px'} right={'51px'}/>
                </div>

                <NewFolder />
            </div>

            <div className="flex gap-4">
                <Tabs />
            </div>

        </div>
  )
}

export default Folders