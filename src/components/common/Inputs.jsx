import React, { useState } from 'react'
import { RiErrorWarningLine } from 'react-icons/ri'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiErrorCircle } from 'react-icons/bi';

export const FormInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   ...rest
}) => {
   return (
      <div className={`input-box flex ${className}`}>
         <input type={type} className='w-[70%] bg-red-400'  placeholder={placeholder} />
         <button className='text-md input-btn'>{Text}</button>
      </div>
   )
}

export const PrimaryInput = ({
   name,
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   info,
   infoText,
   enterOption,
   Tags,
   setTags,
   onChange,
   onBlur,
   valueText,
   error,
   ...rest
}) => {
   const [value , setValue] = useState('');
   const handleEnter = (e) => {
      if(enterOption) {
         if(e.key === 'Enter') {
            setTags((prev) => [...prev , e.target.value ])
            setValue('')
         }
      }
   }
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <input 
            type={type} 
            placeholder={placeholder} 
            min={1}
            value={enterOption ? value : valueText}
            className={`um-sign-field pr-2 ${error ?  "border-[1.9px] border-red-400" : 'border-[1.5px] border-[#94a3b879]'}`}
            onChange={enterOption ? (e) => setValue(e.target.value) : onChange}
            onBlur={onBlur}
            name={name} 
            onKeyDown={handleEnter} 
            disabled={disabled}/>
         {info &&
            <span class="text-xs flex items-center text-[#2E486B] gap-1"><RiErrorWarningLine />{infoText}</span>
         }
         {error &&
            <span class={`${!error && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {error}</span> 
         }
      </div>
   )
}

export const DatePickerCustom = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   info,
   infoText,
   enterOption,
   Tags,
   setTags,
   dateRange, 
   setDateRange,
   ...rest
}) => {
   const [value , setValue] = useState('');
   const [startDate, endDate] = dateRange;
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <DatePicker
            selectsRange={true}
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            className='um-sign-field w-full bg-white border-[1.5px] border-[#94a3b879] px-2'
            withPortal
         />
      </div>
   )
}

export const TextAreaInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   error,
   onBlur,
   onChange,
   name,
   setIsDisabled,
   ...rest
}) => {
   return (
      <div className={`${className}`}>
         <label className='font-bold'>{label}</label>
         <textarea className='um-sign-field-text-area p-2' name={name} onBlur={onBlur} onChange={onChange} placeholder={placeholder}></textarea>
         {error &&
            <span class={`${!error && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {error}</span> 
         }
      </div>
   )
}

export const ActionInput = ({
   className,
   label,
   placeholder,
   type,
   Text,
   disabled,
   actionLeft,
   actionText,
   actionClick,
   actionRight,
   info,
   infoText,
   onClick,
   option,
   setDelivery,
   delivery,
   bgColor,
   ...rest
}) => {
   return (
      <div className={`${className}`}  onClick={onClick}>
         <label className='font-bold'>{label}<span className='text-[#94A3B8] font-medium ml-2'>{option}</span></label>
         <div className='flex'>
            {actionLeft &&
            <div className='relative z-10 w-[20%] h-[48px] text-[14px] md:text-[16px] rounded-l-md flex justify-center items-center -mr-2 border border-[#0012291A] bg-[#D1D8E0]'>
               {actionText}
            </div>
            }
            <input type={type} min={1} placeholder={placeholder} onChange={(e) => setDelivery(e.target.value)} className='um-sign-field bg-white w-[85%] border-[1.5px] border-[#94A3B8]' disabled={!disabled && true}/>
            {actionRight &&
            <div className={`w-[20%] h-[48px] rounded-r-md text-[14px] md:text-[16px] flex justify-center items-center -ml-5 border border-[#0012291A] ${bgColor ? 'bg-[#004399] text-white' : 'bg-[#D1D8E0]' } `}>
               {actionText}
            </div>
            }
         </div>
         {info &&
            <span class="text-xs flex items-center gap-1"><RiErrorWarningLine />{infoText}</span>
         }
      </div>
   )
}