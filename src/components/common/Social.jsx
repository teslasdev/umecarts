import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'

const Social = () => {
  return (
    <>
        <div className='flex gap-6 w-full justify-center items-center mt-3'>
            <div className="um-footer-social um-footer-google rounded-full cursor-pointer">
                <FcGoogle size={20}/>
            </div>
            <div className='um-footer-social um-footer-facebook rounded-full cursor-pointer'>
                <FaFacebookF color='white'/>
            </div>
        </div>
    </>
  )
}

export default Social