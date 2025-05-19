import React from 'react'
import Table from './table'
import dataTable from '@/data/statiticsTeam';
import {Link} from 'react-router-dom';
const PanelStatistics = ({color, title, icon, value, percentaje, clientes}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 w-[50%] flex flex-col gap-4'>
        <div className='flex justify-between items-start h-[40px]'>
            <p className='inter-16 gris w-[65%]'>{title}</p>
            <img src={icon} alt="" />
        </div>

        <div className={`w-full justify-between items-center flex gap-4`}>
            <p className={`bg-${color} blanco rounded-[5px] px-2 py-1`}>{!clientes ? `$${value}` : `Clientes ${value}`}</p>
            <p className={`${color}`}>{percentaje}%</p>
        </div>

        <div className='h-[1px] bg-[#B5B5B5]'></div>

         <Table color={color} title={!clientes ? `Top ventas por sede` : `Top clientes`} clave={'Empresa'} valor={!clientes ? `Ventas` : `Clientes`} data={dataTable} isPrice={!clientes ? true : false}/>

         <Table color={color} title={!clientes ? `Top ventas por usuario` : `Top ventas`} clave={'Usuario'} valor={!clientes ? `Ventas` : `Clientes`} data={dataTable} isPrice={!clientes ? true : false}/>

        <div className='flex justify-end'>
            <Link to={`/${clientes ? 'users' : 'team'}`}>
                <img src={`${clientes ? '/svg/dashboard/goSalmon.svg' : '/svg/dashboard/goVerde.svg'}`} alt="" />
            </Link>
        </div>
    </div>
  )
}

export default PanelStatistics