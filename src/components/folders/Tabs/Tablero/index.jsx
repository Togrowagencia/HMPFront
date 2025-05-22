import React from 'react'

const Tablero = ({data}) => {
  return (
    <div className='w-[80vw] min-h-[100px] max-h-[60vh] flex flex-wrap justify-start items-start gap-4 overflow-y-scroll'>
        {
            data.map((folder, index) => (
                <div className='cursor-pointer bg-blanco rounded-lg shadow-md w-[368px] min-h-[81px] flex justify-start items-center px-[20px] gap-4' key={folder.id}>
                    <img src="/svg/folders/folder.svg" alt="" />
                    <div className='flex flex-col justify-start items-start gap-2 w-[80%]'>
                        <p className='inter-18 azul'>{folder.name}</p>
                        <p className='inter-13 gris flex gap-1 items-center'>
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
                        <div className='flex gap-2 justify-start items-center'>
                            <p className='flex items-center gap-2 inter-11 gris'><img src="/svg/folders/adjuntos.svg" alt="" />{folder.files.length + folder.contracts.length}</p>
                            <p className='flex items-center gap-2 inter-11 gris'><img src="/svg/folders/created.svg" alt="" />{folder.createdAt.split('T')[0]}</p>
                        </div>
                    </div>
                    <img src="/svg/folders/go-salmon.svg" alt="" />
                </div>
            )).slice(0, 8)
        }
    </div>
  )
}

export default Tablero