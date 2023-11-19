import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const ThumbNail = ({
   index,
   item,
   Gallery,
   setGallery,
   Thumb,
   setThumb,
   Meta,
   setMeta
}) => {
   var split = !item ? 'ok.jph' : item.split('.');
   var filename = split[0];
   var extension = split[1];
   if (filename.length > 6) {
     filename = filename.substring(0, 6);
   }
   const handleRemove = () => {
      if(Thumb) {
         Thumb.splice(index,1)
         setThumb(Thumb)
      }
      else if(Meta) {
         Meta.splice(index,1)
         setMeta(Thumb)
      }
      else {
         Gallery.splice(index,1)
         setGallery(Gallery)
      }
   }
   return (
      <div className='relative h-[120px] w-[120px] border border-[#D1D8E0] rounded-md'>
         <div className='absolute w-[25px] bg-white h-[25px] shadow-lg -top-3 -right-2 rounded-full flex items-center justify-center cursor-pointer' onClick={handleRemove}>
            <RxCross2 />
         </div>
         <div className='w-full h-[60%]'>
            <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+item} alt="" className="pro-img rounded-t-[8px] object-cover h-full w-full" />
         </div>
         <div className='bg-[#D1D8E0] h-[40%] text-sm px-2 py-1 rounded-b-sm'>
            <p>{filename + '.' + extension}</p>
         </div>
      </div>
   )
}

export default ThumbNail
