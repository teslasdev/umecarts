import React from 'react'
import { Link } from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import banner from '../../../assets/image/banner.png'
import product from '../../../assets/products/product4.png'
import product2 from '../../../assets/products/product3.png'
import Category1 from '../product/Category1'
const Banner = () => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  return (
    <>
        <div className='flex flex-col sm:flex-row gap-2 justify-center'>
            <div className='um-main-banner sm:w-[50%] md:w-[60%] lg:w-[77%] w-full'>
                <div className="um-main-img">
                    <img src={banner} alt="" srcset="" className='w-full' />
                </div>
                <div className="flex text-center items-center justify-center mt-2 gap-2">
                    <div className="um-main-pagination um-main-pagination-active" />
                    <div className="um-main-pagination"/>
                    <div className="um-main-pagination" />
                    <div className="um-main-pagination"/>
                </div>
            </div>
            {isPortrait && <Category1 /> }

            <div className='um-top-deal md:w-[40%] lg:w-[23%] w-full p-2'>
                <div className="um-top-header text-sm font-bold text-white flex justify-between">
                    <p>Top Deals for Today</p>
                    <Link to="">View all</Link>
                </div>
            {!isPortrait ?
                <div className="um-top-deal-products pt-2">
                    <div className="um-top-product w-full rounded-sm bg-white p-2">
                        <div className="um-top-product_img">
                            <img src={product} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-top-product_details flex flex-col justify-between">
                            <p>Unisex sweatshirt</p>
                            <div className='flex items-end gap-4'>
                                <h4 className='text-red-700 font-bold'>₦12,500</h4>
                                <p className='text-sm text-gray-300'><del>₦25,000</del></p>
                                <span className='um-top-product-promo'>
                                    -50%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="um-top-product w-full rounded-sm bg-white p-2">
                        <div className="um-top-product_img">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-top-product_details flex flex-col justify-between">
                            <p>Unisex sweatshirt</p>
                            <div className='flex items-end gap-4'>
                                <h4 className='text-red-700 font-bold'>₦12,500</h4>
                                <p className='text-sm text-gray-300'><del>₦25,000</del></p>
                                <span className='um-top-product-promo'>
                                    -20%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="um-top-product w-full rounded-sm bg-white p-2">
                        <div className="um-top-product_img">
                            <img src={product2} alt="" className='w-full h-full rounded-sm'/>
                        </div>

                        <div className="um-top-product_details flex flex-col justify-between">
                            <p>Unisex sweatshirt</p>
                            <div className='flex items-end gap-4'>
                                <h4 className='text-red-700 font-bold'>₦12,500</h4>
                                <p className='text-sm text-gray-300'><del>₦25,000</del></p>
                                <span className='um-top-product-promo'>
                                    -10%
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="um-top-product w-full rounded-sm bg-white p-2">
                        <div className="um-top-product_img">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-top-product_details flex flex-col justify-between">
                            <p>Unisex sweatshirt</p>
                            <div className='flex items-end gap-4'>
                                <h4 className='text-red-700 font-bold'>₦2,500</h4>
                                <p className='text-sm text-gray-300'><del>₦2,000</del></p>
                                <span className='um-top-product-promo'>
                                    -50%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            :
                <div className='flex gap-2 flex-wrap justify-center'>
                    <div className='um-top-product-box shadow-sm hover:shadow-md rounded-sm hover: bg-white w-[48%]'>
                        <div className="um-product-img h-[65%] relative">
                            <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-product-details h-[35%] px-2 py-2">
                            <div className='flex gap-4 items-center'>
                                <p className='text-red-700 font-extrabold'>#2500</p>
                                <p className='text-gray-400 text-sm'><del>₦2500</del></p>
                            </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max....</p>
                        </div>
                    </div>
                    <div className='um-top-product-box shadow-sm hover:shadow-md rounded-sm hover: bg-white w-[48%]'>
                        <div className="um-product-img h-[65%] relative">
                            <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-product-details h-[35%] px-2 py-2">
                            <div className='flex gap-4 items-center'>
                                <p className='text-red-700 font-extrabold'>#2500</p>
                                <p className='text-gray-400 text-sm'><del>₦2500</del></p>
                            </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max....</p>
                        </div>
                    </div>

                    <div className='um-top-product-box shadow-sm hover:shadow-md rounded-sm hover: bg-white w-[48%]'>
                        <div className="um-product-img h-[65%] relative">
                            <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-product-details h-[35%] px-2 py-2">
                            <div className='flex gap-4 items-center'>
                                <p className='text-red-700 font-extrabold'>#2500</p>
                                <p className='text-gray-400 text-sm'><del>₦2500</del></p>
                            </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max....</p>
                        </div>
                    </div>
                    <div className='um-top-product-box shadow-sm hover:shadow-md rounded-sm hover: bg-white w-[48%]'>
                        <div className="um-product-img h-[65%] relative">
                            <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                        </div>

                        <div className="um-product-details h-[35%] px-2 py-2">
                            <div className='flex gap-4 items-center'>
                                <p className='text-red-700 font-extrabold'>#2500</p>
                                <p className='text-gray-400 text-sm'><del>₦2500</del></p>
                            </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max....</p>
                        </div>
                    </div>

                </div>
                    
            }
                    
            </div>
        </div>
    </>
  )
}

export default Banner