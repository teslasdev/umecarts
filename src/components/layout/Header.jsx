import React ,{useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import logo from '../../assets/logo/Vector.png';
import {AiOutlineSearch } from 'react-icons/ai'
import {RxCaretDown} from 'react-icons/rx'
import {FaUserPlus,FaUserCheck} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {HiBars3BottomLeft} from 'react-icons/hi2'

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const [toggleOption, setToggleOption] = useState(false)
  return (
    <>
        <header className="um-header">
            {isTabletOrMobile &&
                <div className="um-header-box flex">
                    <img src={logo}  className='um-header-logo' />

                    {/* Search Box */}

                    <div className="um-header-search">
                        <input type="text" className='um-header-input' placeholder='I am searching for'/>
                        <span>
                            <AiOutlineSearch />
                        </span>
                    </div>

                    {/* Options */}
                    <div className="um-header-options">
                        <div className='relative um-header-button cursor-pointer' onClick={() => setToggleOption(!toggleOption)}>
                            <span>
                                Sign In
                            </span>
                            <span className='font-bold'>
                                <RxCaretDown />
                            </span>
                            {toggleOption && (
                                <div className='absolute flex flex-col text-red-500 gap-1 top-14  um-header-dropdown bg-white rounded-sm'>
                                    <span className='flex gap-2 p-2 items-center hover:bg-red-600 hover:text-white'>
                                        <FaUserPlus/>
                                        <Link to="/user/buyer">Register</Link>
                                    </span>

                                    <span className='flex gap-2 p-2 items-center hover:bg-red-600 hover:text-white'>
                                        <FaUserCheck/>
                                        <Link to="/auth/login">Login</Link>
                                    </span>
                                </div>
                            )}
                        </div>
                        <div class="um-header-seller">
                            <Link to='/user/seller'>Be a seller</Link>
                        </div>
                    </div>
                </div>
            }

            {isPortrait && 

                <div className="um-header-box flex">
                    <div className='flex items-center gap-4'>
                        <HiBars3BottomLeft size={24}/>
                        <img src={logo} alt="" />
                    </div>

                    <span>
                        <AiOutlineSearch size={24}/>
                    </span>
                </div>


            }

            {isTabletOrMobile &&

                <div className="um-header-box1">
                    <Link to='/'>Wrist watches</Link>
                    <Link to='/'>Female Fashion & Clothing</Link>
                    <Link to='/'>Electronic & Accessories</Link>
                    <Link to='/'>Sport & Outdoor</Link>
                    <Link to='/'>Jewelry & Accessories</Link>
                    <Link to='/'>Beauty, Health & Hair</Link>
                    <Link to='/'>Others</Link>
                </div>
            }
        </header>
    </>
  )
}

export default Header