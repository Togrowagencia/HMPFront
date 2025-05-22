import React from 'react'
import Header from '@/components/headers/Header'
import Banner from '@/components/banner'
import NewUser from '@/components/modals/newUser'
import Cards from '@/components/users/Cards'
import Table from '@/components/users/Table'
import Pie from '@/components/charts/PieChart'

const Users = () => {
    const labels = ['Oficina 1', 'Oficina 2', 'Oficina 3', 'Oficina 4', 'Oficina 5'];
    const dataActual = [50, 75, 100, 125,25]; // Datos del periodo actual
  return (
    <div className='h-full flex flex-col w-full gap-10 '>
        <Header />
        <div className="flex gap-4">
            <div className='w-[65%] flex gap-4'>
              <Banner title={'USUARIOS'} description={''} backgroundImage="/images/background-morado.png" image={''} bottom={'-50px'} right={'51px'}/>
            </div>
            <NewUser isButton={false}/>
        </div>
        <div className="flex gap-4">
            <Cards title={'Total Transacciones'} value={'500.000'} icon={'/svg/users/total-transaccciones.svg'} color={'verde2'}/>
            <Cards title={'Propiedades totales'} value={'100'} icon={'/svg/users/propiedades-totales.svg'}/>
            <Cards title={'Clientes activos'} value={'250'} icon={'/svg/users/users.svg'}/>
        </div>

        <div className="flex h-full gap-4">
            <div className='w-[66.2%]'>
                <Table/>
            </div>
            <div className='w-[33.8%] bg-blanco rounded-lg shadow-md pt-[27px] flex flex-col items-center justify-center gap-4'>
                <p className='inter-32 azul'>Tipos de usuario</p>
                <div className='w-[90%] h-[90%] flex items-center justify-center'>
                    <Pie
                    labels={labels}
                    dataActual={dataActual}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users