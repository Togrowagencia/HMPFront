import React from 'react'

const SelectHeaders = ({placeholder, value, handleChange, width, icon, options}) => {
  return (
    <div className='flex items-center justify-start gap-4 rounded-[50px] border border-[#0556BF] h-[40px] px-4' style={{width: width}}>
        <img src={icon} alt="" />
        <select value={value} onChange={handleChange} className='inter-18 outline-none bg-transparent w-full h-full'>
            <option value="" disabled>{placeholder}</option>
            <option value="1" className='inter-18'>Option 1</option>
        </select>
    </div>
  )
}

export default SelectHeaders