import { useEffect, useState } from 'react'
import React from 'react-dom'
import { CheckoutAddress } from '../pages/Checkout'
import { getLocalStorage } from '../../utils/getLocalStorage'


const CheckoutController = () => {
   const [checkOut , setCheckout] = useState([
   ])
   useEffect(() => {
      const { data } = getLocalStorage("address");
      setCheckout([data]);
   },[])
   return (
      <>
         <CheckoutAddress data={checkOut}/>
      </>
   )
}


export default CheckoutController