import React from 'react'
import { Badge } from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {Button} from '../common/Button'

const ForgotPassword = () => {

  return (
    <div className='um-sign-bg'>
      <Badge text="Forgotten Password" text2='true' />
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <form action="" className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='text-3xl font-extrabold m-6 mb-12 text-center'>Forgotten your Password?</h4>
            <p className='my-6 text-center'>Kindly fill your email address below. You will be sent an OTP code to reset your password.</p>
            {/* Inputs */}
            <div className='w-full flex flex-col py-4'>
              <input type="email" placeholder='Email Address' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>        
            <Button type="um-btn um-btn-filled" name="Send OTP" auth="button"/>            
          </div>
        </form>
      </div>

    </div>
  )
}

export default ForgotPassword