import React, { useEffect, useState } from 'react'
import { Badge } from '../common/Badge'
import {BiErrorCircle} from 'react-icons/bi'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import {Button} from '../common/Button'
import { Link } from 'react-router-dom'
import Social from '../common/Social'
import { useGetUser, useLogin } from '../../helper/api-hooks/useAuth'
import { setGlobalState } from '../common/store'

const Buyer = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  const { formik, isLoading } = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div className='um-sign-bg'>
      <Badge text="Login"/>
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <div className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='sm:text-3xl text-xl font-extrabold m-6 sm:mb-12 mb-4 text-center'>Log in to your Account</h4>
            {/* Inputs */}
            <div className='w-full flex flex-col py-3'>
              <input 
                type="email" 
                name="email"
                placeholder='Email Address' 
                className={`um-sign-field ${formik.errors.email ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>    
            <span class={`${!formik.errors.email && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.email}</span>    
            <div className='relative w-full flex flex-col  py-3'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input 
                name="password"
                type={toggle ? 'password' : 'text'} 
                placeholder='Password' 
                className={`um-sign-field ${formik.errors.password ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span class={`${!formik.errors.password && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 pt-2`}><BiErrorCircle /> {formik.errors.password}</span>


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
              <Link to="/forgotPassword" className='decoration-1 text-red-600 text-sm text-end'>Forgotten Password?</Link>
            </div>
            <Button 
              disabled={!formik.isValid || !formik.dirty} 
              isLoading={isLoading} 
              className="um-btn um-btn-filled cursor-pointer" 
              name="Login" 
              auth="button"
              type="submit"
              onClick={handleSubmit}
            />
            <div className='mt-12 text-center'>
              <p>Or sign in with</p>
              <Social />
            </div>

            <div className='mt-12 text-center'>
              <p>New on UMECarts?</p>
              <Button className="um-btn um-btn-outline" name="Create an Account" auth="link" link="/user/buyer"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Buyer