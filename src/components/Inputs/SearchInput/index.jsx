import React from 'react'

const SearchInput = ({placeholder, value, handleChange, width, route}) => {
  return (
    <div className='flex items-center justify-start gap-4 rounded-[50px] border border-[#0556BF] h-[40px] px-4' style={{width: width}}>
        <img src={route} alt="" />
        <input type="text" placeholder={placeholder} value={value} onChange={handleChange} className='inter-18'/>
    </div>
  )
}

export default SearchInput