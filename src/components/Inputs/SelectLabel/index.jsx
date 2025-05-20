import React from 'react'

const SelectLabel = ({placeholder,value,handleChange,label, width, options}) => {
  return (
    <div className="flex flex-col items-start px-4 gap-2" style={{width: width}}>
        <label className="inter-13 gris">{label}</label>
        <select value={value} onChange={handleChange} className='outline-none bg-transparent inter-16 w-full border h-[40px] rounded-[50px] px-4 border-[#0556BF] negro'>
            <option value="" disabled>{placeholder}</option>
            <option value="1" className='inter-18'>Option 1</option>
        </select>
    </div>
  )
}

export default SelectLabel