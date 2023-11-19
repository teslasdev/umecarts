import React from 'react'
import banner1 from '../../../assets/image/shop banner.png'
import banner2 from '../../../assets/image/cart banner.png'

const Banner2 = () => {
  return (
    <>
        <div className='flex flex-col sm:flex-row gap-2 sm:py-12 py-4'>
            <div className='sm:w-1/2 w-full shadow-sm rounded-sm'>
                <img src={banner1} className='w-full h-full rounded-sm' alt="" srcset="" />
            </div>

            <div className='sm:w-1/2 w-full shadow-sm rounded-sm'>
                <img src={banner2} className='w-full h-full rounded-sm' alt="" srcset="" />
            </div>
        </div>
    </>
  )
}

export default Banner2