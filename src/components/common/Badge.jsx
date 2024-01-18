import React from 'react'
import {BiHome} from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb'
import { CgCreditCard } from 'react-icons/cg'
import {RxCaretRight} from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { BsCheck2Circle } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
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


export const CustomBadge = ({
  link1,
  link2,
  link3,
  name1,
  name2,
  name3
}) => {
  return (
    <div className='um-sign-badge flex items-center text-sm gap-2'>
        <BiHome />
        {name1 &&
        <>
          <Link to={link1}>{name1}</Link>
          <RxCaretRight />
        </>
        }
        {name2 &&
        <>
          <Link to={link2}>{name2}</Link>
          <RxCaretRight />
        </>
        }
        {name3 &&
        <>
          <Link to={link3}>{name3}</Link>
        </>
        }
    </div>
  )
}


export const CartBadge = ({
  setCaret,
  done,
  current
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 500px)" });
  return (
    <>
      <div className='w-full py-6 flex justify-center items-center gap-2 md:gap-5 text-[#ccc]'>
        <div className={`flex justify-center items-center flex-col ${current.cart ? 'text-[#CA0505]' : done.cart ? 'text-[#017E4D]' : 'text-[#CA0505]'}`}>
          <FiShoppingCart size={isTabletOrMobile ? '35' : '20'}/>
          <p className={`text-[8px] md:text-[14px]`}>1. My cart</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className={`flex justify-center items-center flex-col ${current.checkout ? 'text-[#CA0505]' : done.cart ? 'text-[#017E4D]' : ''}`}>
          <IoLocationOutline size={isTabletOrMobile ? '35' : '20'}/>
          <p className='text-[8px] md:text-[14px]'>2. Shipping info</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className={`flex justify-center items-center flex-col ${current.delivery ? 'text-[#CA0505]' : done.checkout ? 'text-[#017E4D]' : ''}`}>
          <TbTruckDelivery size={isTabletOrMobile ? '35' : '20'}/>
          <p className='text-[8px] md:text-[14px]'>3. Delivery info</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className={`flex justify-center items-center flex-col ${current.payment ? 'text-[#CA0505]' : done.delivery ? 'text-[#017E4D]' : ''}`}>
          <CgCreditCard size={isTabletOrMobile ? '35' : '20'}/>
          <p className='text-[8px] md:text-[14px]'>4. Payment</p>
        </div>
        <RxCaretRight size={setCaret} />
        <div className={`flex justify-center items-center flex-col ${current.confirm ? 'text-[#CA0505]' : done.payment ? 'text-[#017E4D]' : ''}`}>
          <BsCheck2Circle size={isTabletOrMobile ? '35' : '20'}/>
          <p className='text-[8px] md:text-[14px]'>5. Confirmation</p>
        </div>
      </div>
    </>
  )
}
