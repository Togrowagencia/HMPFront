import React from 'react'
import Header from '@/components/headers/Header'
import Banner from '@/components/banner'
import NewTransaction from '@/components/modals/newTransaction'
import Cards from '@/components/transactions/Cards'
import Table from '@/components/transactions/Table'

const Transacciones = () => {
  return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <Header />

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Banner title={'TRANSACCIONES'} description={''} backgroundImage="/images/background-azul.png" image={''} bottom={'-50px'} right={'51px'}/>
                </div>

                <NewTransaction />
            </div>

            <div className="flex gap-4">
                <Cards title={'Total Transacciones'} value={'150'} description={'Transacciones Nuevas'}/>
                <Cards title={'Propiedades Asignadas'} value={'25'} description={'Propiedades'}/>
                <Cards title={'Transacciones cerradas'} value={'25'} description={'Transacciones cerradas'}/>
            </div>

            <Table/>

        </div>
  )
}

export default Transacciones