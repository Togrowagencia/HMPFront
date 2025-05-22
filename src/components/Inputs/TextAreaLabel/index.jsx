import React from 'react'

const TextAreaLabel = ({value,handleChange,label, width, height}) => {
  return (
    <div className="flex flex-col items-start px-4 gap-2" style={{width: width}}>
        <label className="inter-13 gris">{label}</label>
        <textarea value={value} onChange={handleChange} className='resize-none outline-none bg-transparent inter-16 w-full border h-[40px] rounded-[10px] px-4 border-[#0556BF] negro' style={{height: height}}/>
    </div>
  )
}

export default TextAreaLabel