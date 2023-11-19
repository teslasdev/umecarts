import React, { useState } from 'react'
import { Badge } from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {Button} from '../common/Button'

const Seller = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  return (
    <div className='um-sign-bg'>
      <Badge text="Login to Shop"/>
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <form action="" className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='text-3xl font-extrabold m-6 mb-12 text-center'>Log in to your Shop</h4>
            {/* Inputs */}
            <div className='w-full flex flex-col py-4'>
              <input type="email" placeholder='Email Address' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>
            <div className='relative z-10 w-full flex flex-col py-4'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input type={toggle ? 'password' : 'text'} placeholder='Password' className='um-sign-field'/>
              <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />Information error</span>
            </div>



            <div className='flex justify-between gap-2 py-6'>
              <div className='flex gap-1'>
                <input id="agree" type="checkoutput" hidden/>
                <span className='mt-1 cursor-pointer' onClick={() => setCheckbox(!checkbox)}>
                  {checkbox ? <MdCheckBox color='#1F3047'/> : <MdCheckBoxOutlineBlank color='grey' />}
                </span>
                <label htmlFor="agree" className='um-sign-agree flex justify-content'>
                  Keep me logged in
                </label>
              </div>
              <Link className='decoration-1 text-red-600 text-sm text-end'>Forgotten Password?</Link>
            </div>

            <Button type="um-btn um-btn-filled" name="Log in to Shop" auth="button"/>



            <div className='mt-12 text-center'>
              <p>Already have a Seller’s Account?</p>
              <Button type="um-btn um-btn-outline" name="Register your Shop" auth="link" link="/user/seller"/>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Seller