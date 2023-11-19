import React from 'react'
import {BiHome} from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb'
import { CgCreditCard } from 'react-icons/cg'
import {RxCaretRight} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';
export const Badge = (props) => {
  return (
    <div className='um-sign-badge items-center text-sm gap-2 sm:px-12 md:px-24 px-4'>
        <BiHome />
        <Link to="/">Home</Link>
        <RxCaretRight />
        {props.text2 === 'true'  ? <><Link to="/auth/login">Login</Link><RxCaretRight /></>  : '' }
        <span>{props.text}</span>
    </div>
  )
}


export const CartBadge = ({
  data,
  sizeIcon,
  setCaret,
}) => {
  return (
    <>
      <div className='w-full py-6 flex justify-center items-center gap-2 md:gap-5 text-[#ccc]'>
        <div className='flex justify-center items-center flex-col text-[#CA0505]'>
          <FiShoppingCart size={sizeIcon}/>
          <p className='text-[8px] md:text-xs'>1. My cart</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className='flex justify-center items-center flex-col'>
          <IoLocationOutline size={sizeIcon}/>
          <p className='text-[8px] md:text-xs'>2. Shipping info</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className='flex justify-center items-center flex-col'>
          <TbTruckDelivery size={sizeIcon}/>
          <p className='text-[8px] md:text-xs'>3. Delivery info</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className='flex justify-center items-center flex-col'>
          <CgCreditCard size={sizeIcon}/>
          <p className='text-[8px] md:text-xs'>4. Payment</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className='flex justify-center items-center flex-col'>
          <BsCheck2Circle size={sizeIcon}/>
          <p className='text-[8px] md:text-xs'>5. Confirmation</p>
        </div>
      </div>
    </>
  )
}
