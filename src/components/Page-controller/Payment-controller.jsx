import { useContext } from 'react'
import React from 'react-dom'
import { CheckoutPayment } from '../pages/Checkout'
import { GlobalContext } from '../../context'

const PaymentController = () => {
   const {cartSelection , price} = useContext(GlobalContext)
   return (
      <>
         <CheckoutPayment data={cartSelection} price={price}/>
      </>
   )
}


export default PaymentController