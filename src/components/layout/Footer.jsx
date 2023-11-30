import React from 'react'
import { Link } from 'react-router-dom'
import {BsInstagram} from 'react-icons/bs'
import { useMediaQuery } from "react-responsive";
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import paymentCard from '../../assets/image/payment.png'
import logo from '../../assets/logo/Vector.png';

const Footer = ({
  isFullfooter
}) => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
    {isFullfooter &&
      <div className="um-footer-pre sm:h-[306px] md:flex hidden flex-col sm:flex-row sm:justify-between sm:items-start items-center sm:px-6 px-0 py-12">
        <div className="um-footer-form m-6 sm:text-start text-center">
          <img src={logo} alt="" className='m-auto sm:m-0'/>

          <h5 className='text-white font-semibold my-6'>The Largest Localize B2C Online Marketplace </h5>
         
          <div className="um-footer-pre-search">
            <input type="text" className='um-footer-pre-input pl-3 sm:w-[287px] w-[90%]' placeholder='Your Email Address'/>
            <span>
              Search
            </span>
          </div>
        </div>

        <div className="um-footer-information sm:mt-0 mt-4 sm:text-start text-center">
          <h3 className='text-white font-bold mb-4'>Contact Information</h3>
          <div className='flex flex-col text-white  gap-6'>
            <span>Lagos, Nigeria</span>
            <span>+234 0 913 712 1402</span>
            <span>contact@umecarts.com</span>
          </div>
        </div>

        <div className="um-footer-information sm:text-start text-center my-6 sm:my-0">
          <h3 className='text-white font-bold mb-4'>Privacy</h3>
          <div className='flex flex-col text-white  gap-6'>
            <Link to="/">Terms and Conditions</Link>
            <Link to="/">Return Policy</Link>
            <Link to="/">Support Policy</Link>
            <Link to="/">Privacy Policy</Link>
          
          </div>
        </div>

        <div className="um-footer-information sm:text-start text-center">
          <h3 className='text-white font-bold mb-4'>My Account</h3>
          <div className='flex flex-col text-white  gap-6'>
            <Link to="/">Track Order</Link>
            <Link to="/">Logout</Link>
            <Link to="/">Be a Seller</Link>
          
          </div>
        </div>
      </div>
    }
      <div className='um-footer flex md:flex-row flex-col gap-4 md:gap-0 h-full items-center sm:justify-between sm:px-24 px-4 sm:py-2 py-12 mb-8 sm:mb-0 justify-center text-white'>
        <div>
          <p>© umecarts (maxeps group)</p>
        </div>

        <div className='um-footer-box flex justify-center gap-2'>
          <div className='um-footer-social um-footer-facebook rounded-full'>
            <Link to="" className='text-white'>
              <FaFacebookF />
            </Link>
          </div>


          <div className='um-footer-social um-footer-twitter rounded-full'>
            <Link to="" className='text-white'>
              <AiOutlineTwitter />
            </Link>
          </div>


          <div className='um-footer-social um-footer-instagram rounded-full'>
            <Link to="" className='text-white'>
              <BsInstagram />
            </Link>
          </div>

          <div className='um-footer-social um-footer-youtube rounded-full'>
            <Link to="" className='text-white'>
              <AiFillYoutube />
            </Link>
          </div>

          <div className='um-footer-social um-footer-linkedin rounded-full'>
            <Link to="" className='text-white'>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
        

        <div>
          <img src={paymentCard} alt="" srcset="" />
        </div>
      </div>
    </>
  )
}

export default Footer