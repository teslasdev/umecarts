import {BiErrorCircle} from 'react-icons/bi'
const isError = (
   message,
   display
) => {
   return (
      <>
         {display &&  <span class="text-sm text-red-500 font-bold flex items-center gap-1 pt-2"><BiErrorCircle />{message}</span>}
      </>
   )
}
export default isError;