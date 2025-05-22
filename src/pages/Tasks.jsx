import React from 'react'
import HeaderSearchDate from '@/components/headers/HeaderSearchDate'
import Banner from '@/components/banner'
import NewTasks from '@/components/modals/newTasks'

const Tasks = () => {
  return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <HeaderSearchDate />

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Banner title={'ADMINISTRACION DE TAREAS'} description={''} backgroundImage="/images/background-azul.png" image={''} bottom={'-50px'} right={'51px'}/>
                </div>

                <NewTasks />
            </div>

        </div>
  )
}

export default Tasks