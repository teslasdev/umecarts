import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from '../model/Navigation';
import {useMediaQuery} from 'react-responsive';
import { useLocation } from 'react-router';
import AuthBar  from '../model/Sidebar';
import { setGlobalState, useGlobalState } from '../common/store';
import BuyerSidebar from '../dashComponents/buyer/BuyerSidebar';
const BuyerLayout = ({ children }) => {
    const [navBar ,setNavigation ] = useState(true)
    const Location = useLocation()
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [sideBar] = useGlobalState('sideBar')
    useEffect(() => {
        if(Location.pathname === '/auth/login') {
            setNavigation(false)
        }
        else if(Location.pathname === '/user/seller') {
            setNavigation(false)
        }
        else if(Location.pathname === '/user/buyer') {
            setNavigation(false)
        }
        else {
            setNavigation(true)
        }
    },[Location.pathname])
    return (
         <>
            {sideBar && <AuthBar onClick={() => setGlobalState('sideBar' , false)} />}
            <Header />
               <div className="sidebar-main-container">
                  <BuyerSidebar/>
               {children}
               </div>
            <Footer isFullfooter={false}/>
           {isPortrait && (
           navBar  && <Navigation />
         )}
        </>
    )
}

export default BuyerLayout;