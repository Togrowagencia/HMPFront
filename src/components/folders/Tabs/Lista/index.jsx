import React from 'react'

const Lista = ({data}) => {
  return (
    <div className='w-[80vw] h-[60vh] flex flex-col gap-4'>
            <div className='w-full h-full flex flex-col gap-4 '>

                <div className='flex justify-start items-center gap-2 border-b pb-2 px-8'>
                    <p className='inter-16 gris w-[20%]'>Nombre de la carpeta</p>
                    <p className='inter-16 gris w-[20%]'>Creada por</p>
                    <p className='inter-16 gris w-[20%]'>Cantidad</p>
                    <p className='inter-16 gris w-[20%]'>Fecha de creacion</p>
                    <p className='inter-16 gris w-[20%]'>Ver</p>
                </div>

                <div className='flex flex-col justify-start gap-2 w-full'>
                    {
                        data.map((folder, index) => (
                            <div className={`flex justify-start items-center gap-2 py-2 px-8 ${index % 2 == 0 ? 'bg-[#EAEAEA]' : ''} w-full rounded-[5px]`} key={folder.id}>
                                <p className='inter-16 gris w-[20%]'>{folder.name}</p>
                                <p className='inter-16 gris flex gap-1 items-center w-[20%]'>
                                    {folder.user.photoUrl ? (
                                        <img src={folder.user.photoUrl} alt={folder.user.name} />
                                    ) : (
                                        <span className="blanco rounded-full flex items-center justify-center bg-[#EB6450] w-[19px] h-[19px] inter-11 !font-normal ">
                                        {folder.user.name
                                            .split(' ')
                                            .map((word) => word[0])
                                            .join('')
                                            .toUpperCase()}
                                        </span>
                                    )}
                                    {folder.user.name}
                                </p>
                                <p className='inter-16 gris w-[20%]'>{folder.files.length + folder.contracts.length} Documentos</p>
                                <p className='inter-16 gris w-[20%]'>{folder.createdAt.split('T')[0]}</p>
                                <button to="" className='inter-16 gris w-[20%]'><img src="/svg/transactions/eye.svg" alt="" /></button>
                            </div>
                        )).slice(0, 4)
                    }
                </div>
            </div>
    </div>
  )
}

export default Lista