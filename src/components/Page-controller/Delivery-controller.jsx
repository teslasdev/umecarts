import { useContext, useEffect, useState } from 'react'
import React from 'react-dom'
import { CheckoutDelivery } from '../pages/Checkout'
import { GlobalContext } from '../../context'



const DeliveryController = () => {
   const {cartSelection , price} = useContext(GlobalContext)
   
   return (
      <>
         <CheckoutDelivery data={cartSelection} price={price} />
      </>
   )
}


export default DeliveryController