import React from 'react'
import Data from '@/data/transactions'
import ViewPDF from '@/components/reports/Table/showPDF'

const TableReports = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4 bg-white rounded-lg shadow-md pt-[32px] px-[34px]'>

        <div className='flex justify-start items-center gap-2 border-b pb-2 px-8'>
            <p className='inter-16 gris w-[30%]'>Creada por</p>
            <p className='inter-16 gris w-[30%]'>Fecha de creacion</p>
            <p className='inter-16 gris w-[20%]'>Tamaño</p>
            <p className='inter-16 gris w-[20%]'>Eliminar / Ver</p>
        </div>

        <div className='flex flex-col justify-start gap-2'>
            {
                Data.map((item, index) => (
                    <div className={`flex justify-start h-[25px] items-center gap-2 px-8 ${index % 2 == 0 ? 'bg-[#F9F9F9]' : ''}`} key={index}>
                        <p className='inter-16 gris w-[30%] flex items-center gap-2'>
                            {item.user?.photoUrl ? (
                                <img src={item.user.photoUrl} alt={item.user.name} />
                            ) : (
                                <span className="blanco rounded-full flex items-center justify-center bg-[#EB6450] w-[19px] h-[19px] inter-11 !font-normal ">
                                {item.colaborador
                                    .split(' ')
                                    .map((word) => word[0])
                                    .join('')
                                    .toUpperCase()}
                                </span>
                            )}
                            {item.colaborador}
                        </p>
                        <p className='inter-16 gris w-[30%]'>{item.fecha_creacion.split('T')[0]}</p>
                        <p className='inter-16 gris w-[20%]'>{item.precio_venta}</p>
                        <div className='flex justify-between items-center gap-2 w-[20%]'>
                            <button className='inter-16 gris w-[40%]'><img src="/svg/transactions/eye.svg" alt="" /></button>
                            <ViewPDF/>
                        </div>
                    </div>
                )).slice(0, 3)
            }
        </div>
    </div>
  )
}

export default TableReports