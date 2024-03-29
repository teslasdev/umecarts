import React, { useEffect, useState } from "react";
import DashNavbar from "../dashComponents/navbar";
import DashFooter from "../dashComponents/dashFooter";
import "../../styles/dash-css/style.css";
import DashNavigator from "../dashComponents/dashNavigation";
import { useGetUser } from "../../helper/api-hooks/useAuth";
import { setGlobalState } from "../common/store";
import MobileMenu from "../dashComponents/mobileMenu";
const NoSideLayout = ({ children }) => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleToggleIcon = () => {
    setToggleIcon(true);
  };
  const handleCloseToggleIcon = () => {
    setToggleIcon(false);
  };
  
  const { data , refetch, status  } = useGetUser();
  useEffect(() => {
    // Getting token 
    if(status === 'success') {
      setGlobalState('user' , data)
      localStorage.setItem('shopName', data?.shop.shopName)
    }
    refetch()
  } ,[])

  return (
    <>
      <DashNavbar handleToggleIcon={handleToggleIcon} />
      {toggleIcon && (
        <MobileMenu
          toggleIcon={toggleIcon}
          handleCloseToggleIcon={handleCloseToggleIcon}
        />
      )}
      <div className="sidebar-main-container">
        {children}
      </div>
      <DashFooter />
      <DashNavigator />
    </>
  );
};

export default NoSideLayout;
