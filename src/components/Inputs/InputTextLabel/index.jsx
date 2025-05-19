import React from 'react'

const InputTextLabel = ({type,name,value,handleChange,label, width}) => {
  return (
    <div className="flex flex-col items-start px-4 gap-2" style={{width: width}}>
        <label className="inter-13 gris">{label}</label>
        <input
            type={type}
            className="bg-transparent inter-16 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF] negro"
            name={name}
            onChange={handleChange}
        />
    </div>
  )
}

export default InputTextLabel