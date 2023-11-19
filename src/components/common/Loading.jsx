import React from 'react'
import { Button, PrimaryButton } from './Button';
import { RotatingLines } from  'react-loader-spinner'


const Loading = ({
   title,
   onClick,
   isLoading,
   onClose,
   action
}) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed 
      top-0 right-0 left-0 z-[100] min-w-full md:inset-0 h-modal h-full 
      backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center"
    >
      <div className="flex relative p-4 w-full justify-center items-center">
        <div className="relative w-full sm:w-1/3 bg-white rounded-lg shadow">
         {action &&
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent 
            hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto 
            inline-flex items-center"
            data-modal-toggle="popup-modal"
            onClick={onClose}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
         }
          <div className="p-6 text-center">
            <div className='w-full flex justify-center items-center py-6'>
               <RotatingLines
                  strokeColor="green"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="40"
                  visible={true}
               />
            </div>
            <h3 className="mb-5 text-sm font-normal text-green-700">
               {title}
            </h3>
            {action &&
            <div
              className="flex flex-row-reverse justify-around mt-5 
            items-center"
            >
               <div className='w-[30%]'>
                  <Button
                     className="um-btn um-btn-filled  text-white cursor-pointer hover:opacity-70 leading-4 text-sm" 
                     name="Yes" 
                     auth="button"
                     onClick={onClick}
                  />
               </div>

               <div className='w-[30%]'>
                  <Button
                     className="um-btn bg-blue-600 text-white cursor-pointer hover:opacity-70 leading-4 text-sm" 
                     name="Cancel" 
                     auth="button"
                     type="submit"
                     isLoading={isLoading} 
                     onClick={onClose}
                  />
               </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
