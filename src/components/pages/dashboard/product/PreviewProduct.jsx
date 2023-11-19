import React, { useEffect, useState } from 'react'
import NoSideLayout from '../../../layout/NoSideLayout'
import { Link, useParams } from 'react-router-dom'
import policy from '../../../../assets/image/policy.png'
import {FaCopy, FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import {SlHandbag} from 'react-icons/sl'
import product from '../../../../assets/products/product4.png'
import Feature1 from '../../../home/product/Feature'
import { setGlobalState } from '../../../common/store'
import { useGetProductBySlug } from '../../../../helper/api-hooks/useProduct'
import { useUrls } from '../../../../helper/useUrls'
import axios from 'axios'
import { BiCopy, BiSolidCopy } from 'react-icons/bi'
import { CgCopy } from 'react-icons/cg'
import useLocation from "react-router-dom";


const PreviewProduct = () => {
    const { GetProductBySlug } = useUrls()
    const { slug } = useParams();
    const [info , setInfo] = useState([])
    const [indexOn , setIndexOn] = useState(1)
    useEffect(async () => {
        await axios.get(GetProductBySlug + slug).then((res => {
           setInfo(res.data)
        }))
    },[])
    var isDiscount = false;
    switch(info?.price?.discount) {
        case 'Flat' :
            const discount = info?.price?.discount_flat
            if(discount === 0) {
                isDiscount = false;
                
            } else {
                isDiscount = true;
                var calculatePercentage = (info?.price?.discount_flat / info?.price?.unit_price) * 100
                
            }
        break;
    }
    return (
      <NoSideLayout>
         <div className='md:px-32 sm:px-6 p-1 flex sm:flex-row flex-col justify-between gap-4 w-full'>
            <div className='p-1'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-[77%] w-full flex flex-col gap-4'>
                        <div className='flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-md p-2'>
                            <div className='w-full md:w-[35%] py-2'>
                                <div className='md:w-[295px] w-full h-[374px] md:h-[295px] rounded-lg'>
                                    <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+info?.image?.thumbnails[0]} alt="" className='rounded-lg w-full h-full object-cover'/>
                                </div>
                                <div className='scroll flex justify-center overflow-scroll w-full md:justify-start my-4 gap-4'>
                                    <div className='flex gap-4'>
                                        <div className='h-[60px] w-[60px]  rounded-lg'>
                                            <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+info?.image?.thumbnails[0]} alt="" className='rounded-lg w-full h-full object-cover'/>
                                        </div>
                                        {info?.image?.galleries?.map((item , index) => {
                                            return (
                                                <div className='h-[60px] w-[60px]  rounded-lg' key={index}>
                                                    <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+item} alt="" className='rounded-lg w-full h-full object-cover'/>
                                                </div>
                                            )
                                        })}
                                        
                                    </div>
                                </div>

                                <div className='flex gap-2 items-center justify-center'>
                                    <div className={`w-[10px] h-[10px] rounded-full ${indexOn == 0 ? 'bg-red-600' : 'bg-gray-200' }`}/>
                                    {info?.image?.galleries?.map((item,index) => {
                                        return (
                                            <div className={`w-[10px] h-[10px] rounded-full ${indexOn == index+1 ? 'bg-red-600' : 'bg-gray-200' }`} key={index}/>
                                        )
                                    })}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <span className='text-[12px]'>Share</span>
                                    <div className='flex gap-2'>
                                        <div className='um-footer-social rounded-full um-footer-facebook'>
                                            <Link to="" className='text-white'>
                                              <FaFacebookF />
                                            </Link>
                                        </div>


                                        <div className='um-footer-social rounded-full um-footer-twitter'>
                                          <Link to="" className='text-white'>
                                            <AiOutlineTwitter />
                                          </Link>
                                        </div>


                                        <div className='um-footer-social rounded-full um-footer-instagram'>
                                          <Link to="" className='text-white'>
                                            <BsInstagram />
                                          </Link>
                                        </div>

                                        <div className='um-footer-social p-2 rounded-full um-footer-copy'>
                                          <Link to="" className=''>
                                            <BiCopy />
                                          </Link>
                                        </div>
                                        

                                    </div>
                                </div>
                            </div>

                            <div className='md:w-[60%] w-full flex flex-col gap-6'>
                                <h1 className='font-extrabold text-3xl md:h-[30px]'>{info?.information?.product_name}</h1>
                                <div className='flex md:none items-center gap-2'>
                                    <div className='flex gap-4 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={20}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={20}/></span>
                                    </div>
                                    <div className='flex  items-center font-normal text-[12px] text-tertiary' >
                                        <span>(20 reviews)</span>
                                    </div>
                                </div>
                                <div>
                                    <span className='text-sm text-[#2E486B] pb-1'>Price</span>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-red-700 text-3xl font-extrabold'>₦{ isDiscount ?  info?.price?.discount_flat.toLocaleString() : info?.price?.unit_price.toLocaleString()}<span className='text-sm text-gray-200 font-light'>/pc</span></h2>
                                        {isDiscount && 
                                        <>
                                            <p className='text-sm text-gray-300'><del>₦{info?.price?.unit_price.toLocaleString()}</del></p>
                                            <span className='um-top-product-promo'>
                                                -{100 - Math.floor(calculatePercentage)}%
                                            </span>
                                        </>
                                        }
                                    </div>
                                </div>

                                <div>
                                    <span className='text-sm text-[#2E486B] pb-1'>Seller</span>
                                    <div className='flex items-end gap-4'>
                                        <div className='font-extrabold'>SAMUELKROWN</div>

                                    </div>
                                    <div className='underline decoration-1 text-blue-600'>Message Seller</div>
                                </div>

                                <div className='flex flex-col'>
                                    <span className='text-sm text-[#2E486B] pb-1'>Estimated Shipping Time</span>
                                    <span className='font-bold'>5 Days</span>
                                </div>

                                <div>
                                    <span className='text-sm text-[#2E486B] pb-1'>Size</span>
                                    <div className='flex items-end gap-4'>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>41</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>42</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>43</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>44</span>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center'>45</span>
                                    </div>
                                </div>

                                <div>
                                    <span className='text-sm text-[#2E486B] pb-1'>Colours Available</span>
                                    <div className='flex items-end gap-4'>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#ffffff] p-4'/>
                                        <span className='border-gray-1 w-[40px] h-[40px] rounded-md text-sm flex justify-center items-center bg-[#EF9F43] p-4' />
                                    </div>
                                </div>

                                {/* <div className='flex gap-3'>
                                    <button className='btn-default bg-blue-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><FiShoppingCart /> Add to Cart</button>
                                    <button className='btn-default bg-red-secondary text-lg flex items-center justify-center gap-2' onClick={() => setModal(!handleModal)}><SlHandbag/> Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                        
                        <div>
                            <div className='flex flex-col gap-2 bg-white shadow-md rounded-md p-2'>
                                <div className='flex gap-4'>
                                    <button className={`p-2 uppercase  ${window.location.hash !== '#review' && 'border-b-2 border-[#CA0505]' }`}><a href='#description' className='text-[#1F3047] font-bold'>Product Description</a></button>
                                    <button className={`p-2 uppercase  ${window.location.hash == '#review' && 'border-b-2 border-[#CA0505]' }`}><a href='#review' className='text-[#1F3047] font-bold'>Ratings and Reviews</a></button>
                                </div>

                                <div className='p-2' id="description">
                                    <div dangerouslySetInnerHTML={{__html: (info?.information?.description)}} />
                                </div>
                            </div>
                        </div>
                        <div id="review">
                            {/* <div className='flex flex-col md:flex-row gap-10 bg-white shadow-md rounded-md p-4'>
                                <div className='flex flex-col gap-2 w-full md:w-[40%]'>
                                    <h4 className='text-sm text-secondary font-bold'>Overview</h4>
                                    <div className='flex gap-2 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={24}/></span>
                                    </div>
                                    <div className='flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary' >
                                        <h2 className='text-xl font-extrabold text-secondary'>4.50<span className='text-sm font-normal text-blue-light'>/5.0</span></h2>
                                        <span>(80)</span>
                                        <span>(20 reviews)</span>
                                    </div>

                                    <div className='flex gap-4 items-end font-normal text-[12px]'>
                                        <h2 className='text-lg font-extrabold text-secondary'>Ratings</h2>
                                        <span className='text-tertiary'>(80 total ratings)</span>
                                    </div>

                                    <div className='flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary'>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>5.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>4.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>4.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>3.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>2.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h2 className='text-md font-extrabold'>1.0</h2>
                                            <div className='flex gap-1 items-center'>
                                                <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                                <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            </div>
                                            <span>(20 Buyers)</span>
                                        </div>
                                        </div>
                                </div>

                                <div> 
                                    <div className='flex gap-4 items-end font-normal text-[14px] text-tertiary'>
                                        <h2 className='text-md font-extrabold text-secondary'>Reviews</h2>
                                        <span className='text-sm'>(20 total reviews)</span>
                                    </div>

                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>

                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered. It is exactly what i ordered. I am glad that i ordered.It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>
                                    <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                        <div className='flex items-end gap-4'>
                                            <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                            <span>25th Jan, 2023</span>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                        <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className="emppty-pro-boc flex flex-col gap-2 bg-white shadow-md justify-center items-center rounded-md p-4">
                              <div className="dashbor-text">No Rating & Reviews!</div>
                              <div className="pro-simple">
                                You do not have any ratings and reviews on this product yet.
                              </div>
                           </div>
                        </div>
                    </div>

                    <div className='w-[22%] hidden md:flex flex-col gap-4'>
                        <div className='bg-white rounded-md pl-2'>
                            <h3 className='uppercase flex justify-start items-center font-bold  h-[40px]'>Refund Policy</h3>
                            <hr />
                            <div className='flex flex-col justify-start  font-bold pl-4 py-4'>
                                <img src={policy} alt="" srcset="" />
                                <Link to="/view-policy" className='text-red-400 font-normal text-[12px] mt-2'>View Policy</Link>
                            </div>
                        </div>
                        <div className='bg-white pl-2 rounded-md'>
                            <h3 className='uppercase flex justify-start items-center font-bold  h-[40px]'>Ratings and Reviews</h3>
                            <hr />
                        {/* <div className='flex flex-col justify-start font-bold pl-4 pr-6'>
                                <div className='py-2 flex gap-2 items-center'>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStar size={24}/></span>
                                    <span className='text-[#FFCD29]'> <FaStarHalfAlt size={24}/></span>
                                </div>
                                <div className='flex gap-4 items-end font-normal text-[12px] h-[30px] mb-4 text-tertiary' >
                                    <h2 className='text-xl font-extrabold text-secondary'>4.50<span className='text-sm font-normal text-blue-light'>/5.0</span></h2>
                                    <span>(80)</span>
                                    <span>(20 reviews)</span>
                                </div>


                                <div className='flex gap-4 items-end font-normal text-[12px]'>
                                    <h2 className='text-lg font-extrabold text-secondary'>Ratings</h2>
                                    <span className='text-tertiary'>(80 total ratings)</span>
                                </div>

                                <div className='flex flex-col gap-1 mb-2  font-normal text-[14px] text-tertiary'>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>5.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>4.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>4.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>3.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>2.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <h2 className='text-md font-extrabold'>1.0</h2>
                                        <div className='flex gap-1 items-center'>
                                            <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                            <span className='text-[#f3f3f3]'> <FaStar size={16}/></span>
                                        </div>
                                        <span>(20)</span>
                                    </div>
                                </div>


                                <div className='flex gap-4 items-end font-normal text-[14px] text-tertiary'>
                                    <h2 className='text-lg font-extrabold text-secondary'>Reviews</h2>
                                    <span>(20 total reviews)</span>
                                </div>

                                <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                        <span>25th Jan, 2023</span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                    </div>
                                    <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                    <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                </div>

                                <div className='flex flex-col  gap-2  font-normal text-[10px]'>
                                    <div className='flex items-end gap-4'>
                                        <h2 className='text-sm font-extrabold text-tertiary'>Krown</h2>
                                        <span>25th Jan, 2023</span>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStar size={16}/></span>
                                        <span className='text-[#FFCD29]'> <FaStarHalfAlt size={16}/></span>
                                    </div>
                                    <h2 className='text-lg font-extrabold text-tertiary'>Great Product</h2>
                                    <p className='text-[14px] text-secondary'>It is exactly what i ordered. I am glad that i ordered.</p>
                                </div>
                        </div> */}
                        <div className='p-3 text-center'>
                            <div className="font-bold text-md">No Rating & Reviews!</div>
                            <div className="text-sm">
                                You do not have any ratings and reviews on this product yet.
                            </div>
                        </div>
                    </div>
                        <div className='bg-white h-full pl-2 rounded-md'>
                            <h3 className='uppercase flex justify-start items-center font-bold h-[50px]'>Store Information</h3>
                            <hr />

                            <span className='text-[10px]'>Store Name</span>
                            <div className='h-[40px]'>
                                <div className='font-extrabold'>SAMUELKROWN</div>
                            </div>

                            <span className='text-[10px]'>Store Address</span>
                            <h4 className='font-bold'>
                                15, Idi-Omo, Lagere, Ile-Ife, Osun State.
                            </h4>

                            <button className='btn-outline mt-6'>
                                <Link to="/">View store</Link>
                            </button>
                        </div>
                    </div>


                    
                </div>
            </div> 
         </div>
      </NoSideLayout>
    )
}

export default PreviewProduct