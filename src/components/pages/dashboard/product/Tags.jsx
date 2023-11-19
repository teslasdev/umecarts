import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { setGlobalState } from '../../../common/store'

const Tags = ({
   color,
   name,
   index,
   Tags,
   setTags,
   prevTags
}) => {
   const handleRemove = () => {
      Tags.splice(index,1)
      setTags(Tags)
   }
   const handleEnter = () => {
      if(prevTags) {
         setTags((prev) => [...prev , name])
      }
   }
   return (
      <div>
         <div className={`py-1 px-3 flex items-center gap-2 capitalize cursor-pointer`} style={{backgroundColor : color}} key={index} onClick={() => handleEnter(name)}>
            <span className='text-[14px] font-semibold'>{name}</span>
            {!prevTags &&
               <span className='cursor-pointer' onClick={handleRemove}>
                  <RxCross2 size={13} />
               </span>
            }
         </div>
      </div>
   )
}

export default Tags