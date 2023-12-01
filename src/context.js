import { createContext, useEffect, useState } from "react";
import { useGetUser } from "./helper/api-hooks/useAuth";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isToken , setToken] = useState(false)
  const [userData , setData] = useState([])
  const [isAuth , setAuth] = useState(false)
  const [isBuyer , setBuyer] = useState(false)
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
         setBuyer
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
