 import React from 'react'
 
 const CardTasks = ({title,value,color}) => {
   return (
     <div className={`flex justify-between items-center bg-${color} rounded-[5px] px-4 py-8`}>
        <p className='inter-32 blanco'>{title}</p>
        <p className={`inter-32 bg-blanco ${color} p-2 rounded-[5px]`}>{value}</p>
     </div>
   )
 }
 
 export default CardTasks