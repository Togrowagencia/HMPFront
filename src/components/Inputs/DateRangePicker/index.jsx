import React from 'react'
import { DatePicker } from 'antd'
const { RangePicker } = DatePicker;
import './css/styles.css'
const DateRangePicker = ({placeholder, value, handleChange, width, route}) => {
  return (
    <div className='flex items-center justify-start gap-4 rounded-[50px] border border-[#0556BF] h-[40px] px-4' style={{width: width}}>
        <img src={route} alt="" />
        <RangePicker placeholder={['Fecha de inicio', 'Fecha de fin']} value={value} onChange={handleChange} suffixIcon={''} className='inter-18 border-none bg-transparent p-0'/>
    </div>
  )
}

export default DateRangePicker