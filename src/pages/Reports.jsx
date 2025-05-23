import React from 'react'
import HeaderSearchDate from '@/components/headers/HeaderSearchDate'
import Banner from '@/components/banner'
import NewReport from '@/components/modals/newReport'
import Card from '@/components/tasks/Cards'
import TableReports from '@/components/reports/Table'

const Reports = () => {
  return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <HeaderSearchDate />

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Banner title={'ADMINISTRACION DE REPORTES '} description={''} backgroundImage="/images/background-azul.png" image={''} bottom={'-50px'} right={'51px'}/>
                </div>

                <NewReport /> 
            </div>

            <div className="flex gap-4 h-full">
                <div className='w-[65%] flex gap-4'>
                    <TableReports />
                </div>

                <div className='w-[35%] flex flex-col gap-4'>
                  <Card title={'Total reportes creados'} value={'250'} color={'morado'}/>
                  <Card title={'Reportes creados este mes'} value={'15'} color={'verde2'}/>
                </div>
            </div>

        </div>
  )
}

export default Reports