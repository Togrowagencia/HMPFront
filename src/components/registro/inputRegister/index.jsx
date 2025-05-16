import React from 'react'

const InputRegister = ({type,name,value,handleChange,label, width}) => {
  return (
    <div className="flex flex-col items-start px-4 gap-2" style={{width: width}}>
        <label className="textos gris">{label}</label>
        <input
            type={type}
            className="bg-transparent textos-14 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF] negro"
            name={name}
            value={value}
            onChange={handleChange}
        />
    </div>
  )
}

export default InputRegister