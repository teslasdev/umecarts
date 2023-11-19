import { useEffect, useState } from 'react'
import React from 'react-dom'
import Cart from '../pages/Cart'
import { useNavigate } from "react-router-dom";


const CartController = () => {
   const history = useNavigate();
   const [cartUpdate , setCart] = useState([
      {
         "kind": "content#product",
         "id": "onlinsadf:en:US:1111111111",
         "offerId": "1111111111",
         "source": "api",
         "title": "Google Tee Black",
         "description": "The Black Google Tee is available in unisex sizing.",
         "link": "http://my.site.com/blacktee/",
         "imageLink": "https://umecarts.com/public/uploads/all/HgDH1XhOqlFxstz8JyGhDyPfNZrO6aBQvSFVJv6O.jpg",
         "contentLanguage": "en",
         "targetCountry": "US",
         "feedLabel": "US",
         "channel": "online",
         "ageGroup": "adult",
         "availability": "in stock",
         "availabilityDate": "2019-01-25T13:00:00-08:00",
         "brand": "Google",
         "color": "black",
         "condition": "new",
         "gender": "male",
         "googleProductCategory": "1604",
         "gtin": "608802531656",
         "itemGroupId": "google_tee",
         "mpn": "608802531656",
         "done" : false,
         "price": {
          "value": "21.99",
          "currency": "USD"
         },
         "sizes": [
          "Large"
         ]

      },
      {

         "kind": "content#product",
         "id": "online:en:US:1111111111",
         "offerId": "1111111111",
         "source": "api",
         "title": "Google Tee Black",
         "description": "The Black Google Tee is available in unisex sizing.",
         "link": "http://my.site.com/blacktee/",
         "imageLink": "https://umecarts.com/public/uploads/all/ewNMTOlpdUeZQnkOPWGNbigS5AxT6MMCMn0EeDUh.jpg",
         "contentLanguage": "en",
         "targetCountry": "US",
         "feedLabel": "US",
         "channel": "online",
         "ageGroup": "adult",
         "availability": "in stock",
         "availabilityDate": "2019-01-25T13:00:00-08:00",
         "brand": "Google",
         "color": "black",
         "condition": "new",
         "gender": "male",
         "googleProductCategory": "1604",
         "gtin": "608802531656",
         "itemGroupId": "google_tee",
         "mpn": "608802531656",
         "price": {
          "value": "21.99",
          "currency": "USD"
         },
         "sizes": [
          "Large"
         ]
      }
   ])
   return (
      <>
         <Cart data={cartUpdate} history={history}/>
      </>
   )
}


export default CartController