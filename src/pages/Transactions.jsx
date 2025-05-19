import React from 'react'
import Header from '@/components/headers/Header'
import Banner from '@/components/banner'


const Transacciones = () => {
  return (
        <div className='h-full flex flex-col w-full gap-10 '>
            <Header />

            <div className="flex gap-4">
                <div className='w-[65%] flex gap-4'>
                  <Banner title={'TRANSACCIONES'} description={''} backgroundImage="/images/background-azul.png" image={'/images/transacciones-banner.png'} bottom={'-50px'} right={'51px'}/>
                </div>

                <div className='w-[35%] flex gap-4 bg-[#752ED3] rounded-[10px] relative'>
                  <div className='absolute bottom-0 right-0 bg-blanco h-[45px] w-[55px] rounded-tl-lg'>
                    <button>

                    </button>
                  </div>
                </div>
            </div>

        </div>
  )
}

export default Transacciones