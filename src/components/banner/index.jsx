import React from 'react'

const Banner = ({backgroundImage, title, description, image, bottom, right}) => {
  return (
    <div className='bg-white rounded-lg shadow-md w-full h-[118px] flex justify-between items-center relative' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex flex-col gap-2 pl-[40px]'>
            <p className='blanco inter-40'>{title || ''}</p>
            <p className='blanco inter-18'>{description || ''}</p>
        </div>
        <img src={image} className="object-cover object-center absolute" style={{bottom: bottom, right: right}}/>
    </div>
  )
}

export default Banner