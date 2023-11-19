import React, {useState} from 'react'
import { CartBadge } from '../common/Badge'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import isEmpty from '../../utils/isEmpty'

const Cart = ({
    data,
    history
}) => {
    const [productSelected, setSelection] = useState(false)
    const [fetchData,setData] = useState(data)
    const handleCheck = (done,index) => {
        let tmp = fetchData[index];
        tmp.done = !done;

        let dataclone = [...fetchData];
        dataclone[index]  = tmp;
        setData([...dataclone]);
        setSelection(tmp.done)
    }

    const onSubmit = () => {
        const pagination = {
            address : false,
            delivery : false,
            payment : false
          }
        localStorage.setItem('pagination' , JSON.stringify(pagination))

        return history("/checkout");
    }
  return (
    <>
        <Layout>
            <CartBadge  data="cart" />
            <div className='py-6 h-screen'>
            {isEmpty(data) ? 
                <div className='flex justify-center'>
                    <div className='bg-white rounded-md w-full md:w-[50%] text-center p-6 shadow-md'>
                        <h3 className='font-extrabold text-2xl'>Your Cart is Empty!</h3>
                        <h5 className='border-gray-bottom text-[#2E486B] py-4 text-xl'>You do not have any product on your cart yet.</h5>

                        <div className='w-full flex justify-center items-center py-4'>
                            <Link className='btn-default-full bg-red-primary text-lg flex items-center justify-center gap-2'>Check Around</Link>
                        </div>
                    
                    </div>
                </div>
            : 

                <div className='flex justify-center mt-3 p-4 md:p-0'>
                    <div className='bg-white rounded-md w-full md:w-[60%] text-center p-6 shadow-md'>
                        <div className='border-gray-bottom pb-2 md:flex hidden justify-between items-center pr-12'>
                            <h3 className='flex justify-start font-bold text-[18px] w-[60%]'>Product</h3>

                            <div className='flex w-[40%] justify-around'>
                                <h3 className='font-bold text-[18px]'>Quantity</h3>
                                <h3 className='font-bold text-[18px]'>Price</h3>
                            </div>
                        </div>
                        {fetchData?.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className='border-gray-bottom flex justify-between'>
                                        <div className='py-4 flex w-full md:w-[60%] gap-2'>
                                            <label htmlFor={index}>
                                            <input
                                                className="radio-input"
                                                type="checkbox"
                                                id={index}
                                                value={index}
                                                checked = {item.done}
                                                hidden
                                                onChange={() => handleCheck(item.done,index)}
                                            />
                                                <div className={`um-cart-border-outline cursor-pointer ${item.done ? 'um-cart-border-outline-clicked' : ''} `} />
                                            </label>
                                            <div className='um-cart-img-small rounded-sm'>
                                                <img src={item.imageLink} className='w-full h-full rounded-sm object-cover' alt="" srcset="" />
                                            </div>

                                            <div className='flex flex-col items-start justify-start'>
                                                <h3 className='font-extrabold text-lg'>{item.title}</h3>
                                                <p className='text-xs text-[#2E486B]'>{item.sizes[0]}/{item.gender}/{item.color}</p>
                                                <div className='flex gap-2 items-center'>
                                                    <p className='text-xs text-gray-400'>Price</p>
                                                    <h4 className='text-lg text-[#2E486B] font-extrabold'>₦12,500</h4>
                                                </div>
                                            </div>
                                        </div>


                                        
                                        <div className='md:flex hidden justify-around my-3 w-[40%] items-center'>
                                            <div className='flex flex-col gap-2 items-start'>
                                              <div className='flex gap-2 items-center'>
                                                <span className='um-product-reading text-[20px]'>-</span>
                                                <h4>01</h4>
                                                <span className='um-product-reading text-[20px]'>+</span>
                                              </div>
                                              <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                            </div>
                                            <div>
                                                <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                            </div>
                                        </div>

                                        <div className='md:flex hidden self-center um-cart-delete'>
                                            <RiDeleteBin6Line/>
                                        </div>
                                    </div>

                                    <div className='border-gray-bottom'>
                                        <div className='flex md:hidden justify-around my-3 w-full items-center'>
                                            <div className='flex items-center gap-2'>
                                              <div className=''>
                                                <span className='text-xs text-gray-500'>Quantity</span>
                                                <div className='flex gap-2 items-center'>
                                                    <span className='um-product-reading text-[14px] md:text-[20px]'>-</span>
                                                    <h4>01</h4>
                                                    <span className='um-product-reading text-[14px] md:text-[20px]'>+</span>
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                                <span className='text-xs text-gray-500'>Price</span>
                                                <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                            </div>
                                            <div>
                                            <span className='text-xs text-gray-500'>Availabiity</span>
                                                <h3 className='font-extrabold text-[#017E4D]'>In Stock</h3>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}

                     

                        <div className='border-gray-bottom flex  justify-between py-2 md:py-3'>
                            <div className='flex gap-2 md:gap-4 md:w-[60%] w-full items-center'>
                                <p className='text-sm font-semibold text-gray-500'>Sold By</p>
                                <h3 className='text-sm md:text-md font-bold text-[#2E486B]'>SAMUEL CROWN</h3>
                            </div>

                            <div className='underline decoration-1 w-[60%] md:w-[40%] flex justify-start text-blue-600'>Message Seller</div>
                        </div>

                        <div className='py-3 md:flex hidden justify-between items-center'>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-[#2E486B]'>Sub-total :</h3>
                                    <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                                </div>

                                <div className='flex gap-2 items-center text-xs text-gray-400'>
                                    <AiOutlineExclamationCircle />
                                    <p>Excluding shipping fee</p>
                                </div>
                            </div>

                            <div className='w-[70%] flex justify-center items-center'>
                            {productSelected ? 
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2' onClick={onSubmit}>Proceed to Checkout</button>
                            :
                                <button className='h-[62px] text-white rounded-md w-full bg-red-primary-default text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                            }    
                            </div>
                        </div>
                    </div>

                    
                </div>

            }
            </div>
            <div className='fixed block md:hidden bottom-0 bg-white p-3 min-h-[100px] z-50 w-screen'>
                <div className='py-3 flex flex-col md:flex-row gap-4 md:gap-0 items-start justify-between md:items-center'>
                    <div>
                        <div className='flex gap-2 items-center'>
                            <h3 className='text-[#2E486B]'>Sub-total :</h3>
                            <h3 className='text-red-800 font-extrabold text-xl'>#12,500</h3>
                        </div>
                        <div className='flex gap-2 items-center text-xs text-gray-400'>
                            <AiOutlineExclamationCircle />
                            <p>Excluding shipping fee</p>
                        </div>
                    </div>

                    <div className='w-full md:w-[70%] flex justify-center items-center'>
                        {productSelected ? 
                            <button className='h-[62px] text-white rounded-md w-full bg-red-primary text-lg flex items-center justify-center gap-2' onClick={onSubmit}>Proceed to Checkout</button>
                        :
                            <button className='h-[62px] text-white rounded-md w-full bg-red-primary-default text-lg flex items-center justify-center gap-2'>Proceed to Checkout</button>
                        }    
                    </div>
                </div>
            </div>
        </Layout>
    </>
  )
}

export default Cart