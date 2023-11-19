import React from 'react'
import {RxCaretRight} from 'react-icons/rx'
import {useMediaQuery} from 'react-responsive'
import product2 from '../../../assets/products/product3.png'

const Feature = () => {
     const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
     const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
  return (
    <>
        <div className='um-product rounded-sm shadow-md'>
            <div className='um-product-header flex h-[30%] sm:text-xl text-[16px] justify-between px-2 py-4 w-full items-center rounded-t-md bg-red-600'>
                <div>
                    <p className='font-bold sm:text-xl text-sm text-white'>Flash Sales</p>
                </div>

                <div className='flex text-white items-center gap-2'>
                    {isPortrait && <p className='font-bold'>00  : 00  : 00 </p>}
                    {isTabletOrMobile &&  <>
                         <p>Time Remaining </p>  <p className='font-bold sm:text-md text-sm'>00 Hours : 00 Minutes : 00 Seconds</p>
                    </>}
                </div>

                <div className='relative um-header-button flex items-center justify-center gap-2 font-bold sm:h-[50px] h-[34px] cursor-pointer bg-white'>
                    <span>
                        View
                    </span>
                    <span className='font-bold'>
                        <RxCaretRight />
                    </span>
                </div>
            </div>

            <div className='um-product-caret  flex py-2 sm:px-6 px-1 w-full  gap-6 sm:overflow-hidden overflow-x-scroll'>
               <React.Fragment>
                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm'>
                         <div className="um-product-img h-[60%] relative">
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                         </div>

                         <div className="um-product-details  px-2 py-2">
                              <p className='text-red-700 font-extrabold'>#2500</p>
                              <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                              <div className='flex justify-between items-center'>
                                   <div className='bg-gray-300 rounded-full w-[60%] h-[10px]'>
                                        <div className='um-product-range w-[50%]'/>
                                   </div>

                                   <p className='text-sm'>18LEFT</p>
                              </div>
                         </div>

                        
                    </div>


                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%] relative">
                              <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                              <div className='flex gap-4 items-center'>
                                   <p className='text-red-700 font-extrabold'>#2500</p>
                                   <p className='text-gray-400 text-sm'><del>2500</del></p>
                              </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>
                </React.Fragment>
            </div>

            <div className='um-product-caret  flex py-2 sm:px-6 px-1 w-full  gap-6 sm:overflow-hidden  overflow-x-scroll'>
               <React.Fragment>
                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm'>
                         <div className="um-product-img h-[60%] relative">
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                         </div>

                         <div className="um-product-details  px-2 py-2">
                              <p className='text-red-700 font-extrabold'>#2500</p>
                              <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                              <div className='flex justify-between items-center'>
                                   <div className='bg-gray-300 rounded-full w-[60%] h-[10px]'>
                                        <div className='um-product-range w-[50%]'/>
                                   </div>

                                   <p className='text-sm'>18LEFT</p>
                              </div>
                         </div>

                        
                    </div>


                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%] relative">
                              <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                              <div className='flex gap-4 items-center'>
                                   <p className='text-red-700 font-extrabold'>#2500</p>
                                   <p className='text-gray-400 text-sm'><del>2500</del></p>
                              </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>
                </React.Fragment>
            </div>

            <div className='um-product-caret flex py-2 sm:px-6 px-1 w-full  gap-6 sm:overflow-hidden overflow-x-scroll'>
               <React.Fragment>
                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm'>
                         <div className="um-product-img h-[60%] relative">
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                         </div>

                         <div className="um-product-details  px-2 py-2">
                              <p className='text-red-700 font-extrabold'>#2500</p>
                              <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                              <div className='flex justify-between items-center'>
                                   <div className='bg-gray-300 rounded-full w-[60%] h-[10px]'>
                                        <div className='um-product-range w-[50%]'/>
                                   </div>

                                   <p className='text-sm'>18LEFT</p>
                              </div>
                         </div>

                        
                    </div>


                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%] relative">
                              <span className='absolute top-4 right-6 um-product-badge'>-50%</span>
                              <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                              <div className='flex gap-4 items-center'>
                                   <p className='text-red-700 font-extrabold'>#2500</p>
                                   <p className='text-gray-400 text-sm'><del>2500</del></p>
                              </div>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>



                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>




                    <div className='um-product-box shadow-sm hover:shadow-md rounded-sm hover:'>
                       <div className="um-product-img h-[65%]">
                            <img src={product2} alt="" className='w-full h-full rounded-sm' />
                       </div>

                       <div className="um-product-details h-[35%] px-2 py-2">
                            <p className='text-red-700 font-extrabold'>#2500</p>
                            <p className='text-sm font-bold mt-2'>iPhone 11 pro max factory unlocked 64gb | UK used</p>
                       </div>
                    </div>
               </React.Fragment>
            </div>
        </div>
    </>
  )
}

export default Feature