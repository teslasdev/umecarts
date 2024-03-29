import { createContext, useEffect, useState } from "react";
import { useGetIpAddress } from "./helper/api-hooks/useAuth";
import isEmpty from "./utils/isEmpty";


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isToken , setToken] = useState(false)
  const [userData , setData] = useState([])
  const [isAuth , setAuth] = useState(false)
  const [isBuyer , setBuyer] = useState(false)
  const [bandDetails , setBankDetails] = useState([])
  const [addressDetails , setaddressDetails] = useState([])
  const [cartUpdate , setCart] = useState([])
  const [cartCheck , setcartCheck] = useState(false)
  const [cartIndex, setIndex] = useState([])
  const [price , setPrice] = useState(0)
  const [cartSelection , setCartSelection] = useState([])
  const [categories , setCatogories] = useState([])
  return (
    <GlobalContext.Provider
      value={{
        isToken,
        userData,
        setToken,
        setData,
        isAuth, 
        setAuth,
        isBuyer , 
        setBuyer,
        bandDetails, 
        setBankDetails,
        cartUpdate , 
        setCart,
        cartCheck , 
        setcartCheck,
        cartIndex, 
        setIndex,
        price, 
        setPrice,
        addressDetails, 
        setaddressDetails,
        cartSelection , 
        setCartSelection,
        categories , 
        setCatogories
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
