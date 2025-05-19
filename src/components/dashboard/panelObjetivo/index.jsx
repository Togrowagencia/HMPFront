import React from 'react'
import NewObjetive from '@/components/modals/newObjetive'
const PanelObjetivo = ({ value = 200, max = 1000, size = 200, strokeWidth = 10, color = '#2CD3B7', bgColor = '#183A74' }) => {
    const percentage = Math.min((value / max) * 100, 100);
    const radius = 50;
    const dashArray = 2 * Math.PI * radius;
    const dashOffset = dashArray * (1 - percentage / 100);
  return (
    <div className='bg-white rounded-lg shadow-md p-4 w-[20%] relative flex flex-col gap-6 justify-center items-center'>

        <NewObjetive/>

        <div className='relative flex flex-col gap-6 justify-center items-center'>
        <svg width={size} height={size} viewBox="0 0 120 120">
            {/* Fondo */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={bgColor}
                strokeWidth={strokeWidth}
            />
            {/* Progreso */}
            <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
            />
        </svg>
        {/* Texto */}
        <div
            style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: size * 0.15,
            fontWeight: 'bold',
            color: '#00A370'
            }}
        >
            ${value}
        </div>

        </div>
        <p className='text-center inter-18 azul w-[60%]'>Objetivo ventas Global</p>
    </div>
  )
}

export default PanelObjetivo