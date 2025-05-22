import React from 'react'
import HeaderDashboard from '@/components/headers/HeaderDashboard'
import Banner from '@/components/banner'
import VerticalBarChart from '@/components/charts/VerticalBar';
import PanelFilesReports from '@/components/dashboard/panelFilesReports';
import PanelStatistics from '@/components/dashboard/panelStatistics';
import PanelProperties from '@/components/dashboard/panelProperties';
import PanelMejorMes from '@/components/dashboard/panelMejorMes';
import PanelObjetivo from '@/components/dashboard/panelObjetivo';
const Dashboard = () => {
    const labels = ['Oficina 1', 'Oficina 2', 'Oficina 3', 'Oficina 4'];
    const dataActual = [50, 75, 100, 125]; // Datos del periodo actual
    const dataAnterior = [40, 70, 90, 110];

    return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <HeaderDashboard />

            {/**Primera y segunda fila del dashboard */}
            <div className="flex gap-4">

                <div className="w-[65%] h-[428px] flex flex-col gap-4">
                    <Banner title={'Bienvenido a Brokers Max'} description={'Panel CEO'} backgroundImage="/images/background-azul.png" image={''} bottom={'-14px'} right={'51px'}/>

                    <div className='flex gap-4 h-[calc(100%_-_134px)]'>
                        <div className='bg-white rounded-lg shadow-md p-4 w-[60%] relative flex justify-center items-center'>
                            <p className='absolute inter-18 azul-alternativa top-4 left-4'>Recaudado por oficina</p>
                            <VerticalBarChart
                                labels={labels}
                                dataActual={dataActual}
                                dataAnterior={dataAnterior}
                            />
                        </div>

                        <div className='flex flex-col w-[40%] gap-4'>
                            <PanelFilesReports title={'Reportes en línea'} icon={'/svg/dashboard/reports.svg'} description={'Reportes generados'} value={'400'} percentaje={20} link={'/reports'}/>

                            <PanelFilesReports title={'Archivos'} icon={'/svg/dashboard/files.svg'} description={'Documentos cargados'} value={'200'} percentaje={-20} link={'/folders'}/>
                        </div>
                    </div>

                </div>

                <div className='flex w-[35%] h-[428px] gap-4'>
                    <PanelStatistics color={'verde2'} title={'Estadisticas de Equipo'} icon={'/svg/dashboard/equipo.svg'} value={'600.000'} percentaje={20} clientes={false}/>
                    <PanelStatistics color={'salmon'} title={'Clientes'} icon={'/svg/dashboard/clientes.svg'} value={'100'} percentaje={20} clientes={true}/>
                </div>
                
            </div>
            {/**END::Primera y segunda fila del dashboard */}

            <div className='flex gap-4 w-full h-full'>
                <PanelProperties />
                <PanelMejorMes />
                <PanelObjetivo/>
            </div>


        </div>
    )
}

export default Dashboard