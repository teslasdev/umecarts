import React from 'react'

const Loader = () => {
  return (
      <div className='fixed w-full h-screen blur-bg top-0 left-0 flex justify-center items-center'>
         <div className='w-[24px] h-[24px] border-transparent animate-spin border-[2px] border-t-[2px] border-r-[2px] border-b-[2px] border-t-[#CA0505] border-b-[#CA0505] border-r-[#002C66] flex justify-center items-center rounded-full'></div>
      </div>
   )
}

export default Loader
