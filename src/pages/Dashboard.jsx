import React from 'react'
import HeaderDashboard from '@/components/headers/HeaderDashboard'
import Banner from '@/components/banner'
const Dashboard = () => {
    return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <HeaderDashboard />

            {/**Primera y segunda fila del dashboard */}
            <div className="flex gap-4">

                <div className="w-[65%] h-[428px] flex flex-col gap-4">
                    <Banner title={'Bienvenido a Brokers Max'} description={'Panel CEO'} backgroundImage="/images/background-azul.png" image={'/images/logo-dashboard.png'}/>

                    <div className='flex gap-4 h-[calc(100%_-_134px)]'>
                        <div className='bg-white rounded-lg shadow-md p-4 w-[60%]'></div>

                        <div className='flex flex-col w-[40%] gap-4'>
                            <div className='bg-white rounded-lg shadow-md p-4 w-full h-[50%]'></div>
                            <div className='bg-white rounded-lg shadow-md p-4 w-full h-[50%]'></div>
                        </div>
                    </div>

                </div>

                <div className='flex w-[35%] h-[428px] gap-4'>
                    <div className='bg-white rounded-lg shadow-md p-4 w-[50%]'></div>
                    <div className='bg-white rounded-lg shadow-md p-4 w-[50%]'></div>
                </div>
                
            </div>
            {/**END::Primera y segunda fila del dashboard */}

            <div className='flex gap-4 w-full h-full'>
                <div className='bg-white rounded-lg shadow-md p-4 w-[50%]'></div>
                <div className='bg-white rounded-lg shadow-md p-4 w-[30%]'></div>
                <div className='bg-white rounded-lg shadow-md p-4 w-[20%]'></div>
            </div>


        </div>
    )
}

export default Dashboard