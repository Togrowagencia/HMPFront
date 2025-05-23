import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const { MonthPicker } = DatePicker;
import './css/styles.css'
const DateMonthPicker = ({label, value, handleChange, width, route}) => {
  return (
    <div className="flex flex-col items-start px-4 gap-2" style={{width: width}}>
      <label className="inter-13 gris">{label}</label>
      <div className='flex items-center justify-start gap-4 rounded-[50px] border border-[#0556BF] h-[40px] px-4 w-full'>
          <img src="/svg/inputs/calendar.svg" className="w-[20px] h-[20px]"/>
          <MonthPicker placeholder={['', '']} value={value} onChange={handleChange} suffixIcon={''} className='inter-18 border-none bg-transparent p-0 w-full'/>
      </div>
    </div>
  )
}

export default DateMonthPicker