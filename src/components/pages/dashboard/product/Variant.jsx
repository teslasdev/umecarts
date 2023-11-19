import React, { useState } from 'react'
import { MdDeleteOutline, MdDeleteSweep } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsDash, BsPlus } from 'react-icons/bs'
import { ActionInput, PrimaryInput } from '../../../common/Inputs'
import isEmpty from '../../../../utils/isEmpty'

const Variant = ({
   data,
   index,
}) => {
   const [isOpen , setOpen] = useState(false)
   return (
      <>
         <div className='flex border-t border-[#94A3B8]' key={index}>
            <div className='w-[30%] border-r border-[#94A3B8] p-2 px-4 flex items-center gap-3 cursor-pointer' onClick={() => setOpen(!isOpen)}>
               <div className='w-[24px] h-[24px] bg-[#F0F7FF] flex justify-center rounded-full items-center'>
                  {isOpen ? <BsDash /> : <BsPlus />}
               </div>
               <h2 className='font-bold text-[#1F3047]'>{data}</h2>
            </div>
            <div className='w-[60%] border-r flex justify-center border-[#94A3B8] p-2'>
               <PrimaryInput 
                  placeholder={'12,250.00'} 
                  type={'text'}
                  className={'w-[95%] flex flex-col'} 
               />
            </div>
            <div className='w-[10%] p-3 flex justify-center items-center'>
               <div className='w-[44px] h-[44px] bg-[#FEF0F0] flex justify-center rounded-full items-center'>
                  <RiDeleteBinLine color='#CA0505'/>
               </div>
            </div>
         </div>
         {isOpen &&
         <>
            <div className='flex border-t border-[#94A3B8]'>
            <div className='w-[30%] border-r border-[#94A3B8] p-2 px-4 flex items-center gap-3'>
               <div className='w-[24px] h-[24px]  flex justify-center rounded-full items-center'>
                  {""}
               </div>
               <h2 className='font-bold text-[#1F3047]'>Sku</h2>
            </div>
            <div className='w-[70%] flex justify-center border-[#94A3B8] p-2'>
               <PrimaryInput 
                  placeholder={'0'} 
                  type={'text'}
                  className={'w-[95%] flex flex-col'} 
               />
            </div>
         </div>
         <div className='flex border-t border-[#94A3B8]'>
            <div className='w-[30%] border-r border-[#94A3B8] p-2 px-4 flex items-center gap-3'>
               <div className='w-[24px] h-[24px]  flex justify-center rounded-full items-center'>
                  {""}
               </div>
               <h2 className='font-bold text-[#1F3047]'>Quality</h2>
            </div>
            <div className='w-[70%] flex justify-center border-[#94A3B8] p-2'>
               <PrimaryInput 
                  placeholder={'0'} 
                  type={'text'}
                  className={'w-[95%] flex flex-col'} 
               />
            </div>
         </div>

         <div className='flex border-t border-[#94A3B8]'>
            <div className='w-[30%] border-r border-[#94A3B8] p-2 px-4 flex items-center gap-3'>
               <div className='w-[24px] h-[24px]  flex justify-center rounded-full items-center'>
                  {""}
               </div>
               <h2 className='font-bold text-[#1F3047]'>Image</h2>
            </div>
            <div className='w-[70%] flex justify-center border-[#94A3B8] p-2'>
               <ActionInput
                  actionLeft={true}
                  actionText={"Browse"} 
                  placeholder={'Click to add File(s)...'} 
                  type={'text'}
                  className={'w-[95%] flex flex-col'} 
               />
            </div>
         </div>
         </>

         
         }
      </>
   )
}

export default Variant