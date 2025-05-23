import React from 'react'
import HeaderSearchDate from '@/components/headers/HeaderSearchDate'
import Banner from '@/components/banner'
import NewTasks from '@/components/modals/newTasks'
import Card from '@/components/tasks/Cards'
import PieChart from '@/components/tasks/PieChart'
import Calendar from '@/components/tasks/Calendar'
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

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Calendar />
                </div>

                <div className='w-[35%] flex flex-col gap-4'>
                  <Card title={'Tareas Totales'} value={'250'} color={'morado'}/>
                  <Card title={'Tareas Completadas Hoy'} value={'15'} color={'verde2'}/>
                  <Card title={'Tareas Pendientes'} value={'152'} color={'salmon'}/>
                  <div className='relative w-full h-[212px] max-h-[212px] bg-white rounded-lg shadow-lg flex items-center justify-center'>
                    <p className='inter-18 azul absolute top-6 left-6 w-[200px]'>Tareas Completadas vs Pendientes</p>
                    <PieChart dataActual={[60,40]} labels={['Completado','Pendiente']}/>
                  </div>
                </div>
            </div>

        </div>
  )
}

export default Tasks