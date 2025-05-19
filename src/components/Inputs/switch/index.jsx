import React from 'react'
import './css/styles.css'
const Switch = ({checked, handleChange, placeholder, width}) => {
  return (
    <div className='flex gap-2 items-center' style={{width: width}}>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
        </label>
        <p className='inter-13 gris-oscuro'>{placeholder}</p>
    </div>
  )
}

export default Switch