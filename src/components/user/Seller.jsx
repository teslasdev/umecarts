import React, { useEffect, useState } from 'react'
import { Badge } from '../common/Badge'
import {RiErrorWarningLine} from 'react-icons/ri'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {MdCheckBox,MdCheckBoxOutlineBlank} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {Button} from '../common/Button'
import Social from '../common/Social'
import { useRegisterSeller } from '../../helper/api-hooks/useAuth'
import { setGlobalState, useGlobalState } from '../common/store'
import { BiErrorCircle } from 'react-icons/bi'

const Seller = () => {
  const [checkbox,setCheckbox] = useState(false)
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    setGlobalState('Auth' , 'Seller')
  },[])
  const { formik, isLoading } = useRegisterSeller();
  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div className='um-sign-bg'>
      <Badge text="Be a Seller"/>
      <div className="um-sign-box h-full w-full py-12 sm:px-0 px-3 flex justify-center items-center">
        <form action="" className='um-sign-form sm:p-8 p-4 bg-white'>
          <div className="um-sign-fields ">
            <h4 className='text-3xl font-extrabold m-6 mb-12 text-center'>Register Your Shop</h4>
            <p className='my-6'>Kindly fill all inputs so that you can continue to register your seller’s account.</p>
            <div>
                <p className='font-bold py-6'>Basic Information</p>
            </div>
             {/* Inputs */}
             <div className='w-full flex flex-col py-4'>
              <input 
                type="text" 
                name="firstname"
                placeholder='First Name' 
                className={`um-sign-field ${formik.errors.firstname ?  "border-[1.88px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>    
            <span class={`${!formik.errors.firstname && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {formik.errors.firstname}</span> 

            <div className='w-full flex flex-col py-4'>
              <input 
                type="text" 
                name="lastname"
                placeholder='Last Name' 
                className={`um-sign-field ${formik.errors.lastname ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>    
            <span class={`${!formik.errors.lastname && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {formik.errors.lastname}</span> 

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
            <span class={`${!formik.errors.email && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {formik.errors.email}</span> 

            <div className='relative w-full flex flex-col  py-4'>
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
            <span class={`${!formik.errors.password && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {formik.errors.password}</span>



            <div className='relative w-full flex flex-col  py-4'>
              <span className='um-sign-icon'  onClick={() => setToggle(!toggle)} >{toggle ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
              <input 
                name="confirmPassword"
                type={toggle ? 'password' : 'text'} 
                placeholder='Confirm Password' 
                className={`um-sign-field ${formik.errors.confirmPassword ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span class={`${!formik.errors.confirmPassword && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {formik.errors.confirmPassword}</span>
            <div>
                <p className='font-bold py-6'>Business Information</p>
            </div>

            <div className='relative z-10 w-full flex flex-col  py-4'>
              <div className='flex items-center gap-2'>
              <input 
                name="shopName"
                type="text"
                placeholder='Shop Name' 
                className={`um-sign-field w-4/5 ${formik.errors.shopName ?  "border-[1.8px] border-red-400" : 'border-[1.5px] border-[#94A3B8]'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
                <p>.umecarts.com</p>
              </div>
              <span class="text-sm flex items-center gap-1 pt-2"><RiErrorWarningLine />Your shop name will be used as prefix for your personal domain</span>
            </div>

            <div className='w-full flex flex-col py-4'>
              <input 
                type="text" 
                name="shopAddress"
                placeholder='Shop Address' 
                className={`um-sign-field border-[1.5px] border-[#94A3B8]`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>    
           
            <div className='flex items-start gap-2'>
              <input id="agree" type="checkoutput" hidden/>
              <span className='mt-1 cursor-pointer' onClick={() => setCheckbox(!checkbox)}>
                {checkbox ? <MdCheckBox color='#1F3047'/> : <MdCheckBoxOutlineBlank color='grey' />}
              </span>
              <label htmlFor="agree"className='um-sign-agree'>
                By creating your account, you agree to our <Link to="/" className='text-red-500'>Terms & Conditions </Link> and <Link to="/" className='text-red-500'>Privacy Policy.</Link>
              </label>
            </div>

            <Button 
              disabled={!formik.isValid || !formik.dirty} 
              isLoading={isLoading} 
              className="um-btn um-btn-filled cursor-pointer" 
              name="Register Your Shop" 
              auth="button"
              type="submit"
              onClick={handleSubmit}
            />
            <div className='mt-12 text-center'>
              <p>Or register with</p>
              <Social />
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Seller