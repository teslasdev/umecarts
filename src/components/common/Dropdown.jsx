import { useEffect, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import { RiErrorWarningLine } from "react-icons/ri"
import isEmpty from "../../utils/isEmpty"
import { CgCheck } from "react-icons/cg"
import ToggleSwitch from "../dashComponents/ToggleSwitch"
import { getGlobalState, setGlobalState, useGlobalState } from "./store"
import { useBrand, useCategory } from "../../helper/api-hooks/useGeneral"
import { BiErrorCircle, BiSearch } from "react-icons/bi"

export const DropdownDefault = ({
   close,
   className,
   options,
   label,
   placeholder,
   disabled,
   type,
   dropLabel,
   info,
   infoText,
   activator,
   Multiple,
   zIndex,
   TypeOf,
   attributes,
   setAttribute,
   setColor,
   colors,
   setGender,
   gender,
   size,
   setSize,
   name,
   onChange,
   onBlur,
   error,
   setProvider,
   discount,
   setDiscount,
   option,
   setOption
}) => {
  const [isOpen , setOpen] = useState(false)
  const [select, setSelect] = useState('')
  const [brands, setBrands] = useGlobalState('brands')
  const [selectIndex, setSelectIndex] = useState(0)
  const {refetch} = useCategory();
  const handleSelect = async (value , idx) => {
    const selection = [];
    if(!Multiple) {
      setSelect(value)
      setOpen(false);
      switch(TypeOf) {
        case 'Category' :
          setGlobalState('categoryId', idx)
          refetch()
        break;
        case 'Brand' :
          setBrands(value)
        break;
        case 'Provider' :
          setProvider(value)
        break;
        case 'Discount' :
          setDiscount(value)
        break;
      }
      setOption(value)
    }
    else {
      switch(TypeOf) {
        case 'Attributes' :
          var boxArrayToset = setAttribute
          var boxArray = attributes
        break;
        case 'Colors' :
          var boxArrayToset = setColor
          var boxArray = colors
        break;
        case 'Gender' :
          var boxArrayToset = setGender
          var boxArray = gender
        break;
        case 'Size' :
          var boxArrayToset = setSize
          var boxArray = size
        break;
      }
      if(boxArray.includes(value)) {
        const newSelected = []
        for (let i = 0; i < boxArray.length; i++) {
          if(boxArray[i] != value) {
            newSelected.push(boxArray[i])
          }
        }
        boxArrayToset(newSelected)
      } 
      else {
        selection.push(value)
        if(isEmpty(boxArray)) {
          setSelectIndex(0)
          boxArrayToset(selection)
        } else {
          setSelectIndex(selectIndex + 1)
          boxArrayToset((prev) => [
            ...prev,
            value
          ])
        }
      }
    }
  }
  useEffect(() => {
    refetch()
  })
  switch(TypeOf) {
    case 'Attributes' : 
      var selectedLabel = attributes
    break;
    case 'Colors' : 
      var selectedLabel = colors
    break;
    case 'Gender' : 
      var selectedLabel = gender
    break;
    case 'Size' : 
      var selectedLabel = size
    break;
  }
  const [isToggled , setIsToggled] = useState(false)
  return (
   <>
        <div className='relative w-[100%]'>
          <div className={`relative ${className}`}>
              <div className="flex justify-between items-center">
                <label className='font-bold'>{label}</label>
                {activator &&
                  <ToggleSwitch setIsToggled={() => setIsToggled(!isToggled)}/>
                }
              </div>
            
            <div type={type} className='um-sign-field bg-white border-[1.5px]  border-[#94a3b879] w-full cursor-pointer flex items-center' onClick={() => setOpen(!isOpen)}>
              <input type="hidden" className="bg-transparent cursor-pointer" value={select} name={name} onChange={onChange} onBlur={onBlur} placeholder={placeholder}  onClick={() => setOpen(!isOpen)} />
              {Multiple ? 
                <p className="text-[#777777]">{isEmpty(selectedLabel) ?  placeholder : selectedLabel.join(',')}</p> : 
                <p className="text-[#777777]">{isEmpty(select) ?  placeholder : select}</p>}
            </div>
            <span className={`absolute right-5 ${label ? 'top-[55%]' : 'top-[43%]'}`}>
              {!isOpen ?
                <FaAngleDown /> 
                :
                <FaAngleUp /> 
              }
            </span>
          </div>
          {activator ? isToggled && isOpen &&
          <div className={`absolute ${zIndex} w-full overflow-y-scroll top-full  min-h-[120px] max-h-[250px] bg-white rounded-md shadow-lg`}>
            <div className="flex item-center um-sign-field w-full  bg-white border-[1.5px] border-[#94a3b879] px-2">
              <span class="w-[5%] h-[100%] flex justify-center items-center">
                <BiSearch />
              </span>
              <input type="text" className='border-none outline-none h-full w-[80%]' />
            </div>
            <ul className=''>
              {isEmpty(options) && 
                <div className="flex justify-center items-center h-[70px]">Not Data</div>
              }
              <li className='pl-2 py-2'>{dropLabel}</li>
                {options.map((item , index) => {
                  return  (
                    <div className="flex gap-1 hover:bg-red-500 hover:text-white w-full px-6 items-center" onClick={() => handleSelect(item.name , item.id)} key={index}>
                    {!isEmpty(item.color) &&
                    <div className={`w-[15px] flex h-[15px] rounded-sm border border-gray-200`} style={{backgroundColor : item.color}}/>
                    }
                    <li className='w-full pl-2 py-2 px-6 cursor-pointer hover:bg-red-500 hover:text-white border-b border-[#fafafa37]'>{item.name}</li>
                    {selectedLabel && 
                      selectedLabel.map((selected) => {
                        if(selected === item.name) {
                          return (
                            <span>
                              <CgCheck size={22}/>
                            </span>
                          )
                        }
                      }) 
                    }
                    </div>
                  )
               })}
            </ul>
          </div>
          : isOpen &&
          <div className={`absolute ${zIndex} w-full overflow-y-scroll top-full  min-h-[120px] max-h-[250px] bg-white rounded-md shadow-lg`}>
            <div className="flex item-center um-sign-field w-full  bg-white border-[1.5px] border-[#94a3b879] px-2">
              <span class="w-[5%] h-[100%] flex justify-center items-center">
                <BiSearch />
              </span>
              <input type="text" className='border-none outline-none h-full w-[80%]' />
            </div>
            <ul className=''>
              {isEmpty(options) && 
                <div className="flex justify-center items-center h-[70px]">Not Data</div>
              }
              <li className='pl-2 py-2'>{dropLabel}</li>
                {options.map((item , index) => {
                  return  (
                    <div className="flex gap-1 hover:bg-red-500 hover:text-white w-full px-6 items-center" onClick={() => handleSelect(item.name , item.id)} key={index}>
                    {!isEmpty(item.color) &&
                    <div className={`w-[15px] flex h-[15px] rounded-sm border border-gray-200`} style={{backgroundColor : item.color}}/>
                    }
                    <li className='w-full pl-2 py-2 px-6 cursor-pointer hover:bg-red-500 hover:text-white border-b border-[#fafafa37]'>{item.name}</li>
                    {selectedLabel && 
                      selectedLabel.map((selected) => {
                        if(selected === item.name) {
                          return (
                            <span>
                              <CgCheck size={22}/>
                            </span>
                          )
                        }
                      }) 
                    }
                    </div>
                  )
               })}
            </ul>
          </div>
          }
      </div>
      {info &&
      <span class="text-xs flex items-center gap-1"><RiErrorWarningLine />{infoText}</span>
      }
      {error &&
        <span class={`${!error && 'hidden'} text-sm text-red-500 font-bold flex items-center gap-1 px-1`}><BiErrorCircle /> {error}</span> 
      }
   </>
   )
}