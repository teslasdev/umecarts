import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from '../model/Navigation';
import {useMediaQuery} from 'react-responsive';
import { useLocation, useNavigate, useNavigation } from 'react-router';
import { AuthBar } from '../model/Sidebar';
import { setGlobalState, useGlobalState } from '../common/store';
const Layout = ({ children }) => {
    const [navBar ,setNavigation ] = useState(true)
    const Location = useLocation()
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [sideBar] = useGlobalState('sideBar')
    useEffect(() => {
        if(Location.pathname !== '/auth/login' || Location.pathname !== '/user/login' || Location.pathname !== '/user/seller') {
            setNavigation(false)
        }
    },[navBar])
    const navigate = useNavigate();
    return (
        <>
            {sideBar && <AuthBar navigate={navigate} onClick={() => setGlobalState('sideBar' , false)} />}
            <Header />
                {children}
            <Footer />
           {isPortrait && navBar  && <Navigation />}
        </>
    )
}

export default Layout;