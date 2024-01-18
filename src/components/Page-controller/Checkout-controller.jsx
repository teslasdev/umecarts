import { Suspense, useContext, useEffect, useState } from 'react'
import React from 'react-dom'
import { CheckoutAddress } from '../pages/Checkout'
import { getLocalStorage } from '../../utils/getLocalStorage'
import { GlobalContext } from '../../context'
import { useAddress } from '../../helper/api-hooks/useGeneral'


const CheckoutController = () => {
   const { price  } = useContext(GlobalContext)
   const { data, isLoading } = useAddress();
   return (
      <Suspense fallback={<p>Loading...</p>}>
         <CheckoutAddress data={data ? data.addresses : []} price={price}/>
      </Suspense>
   )
}


export default CheckoutController