// import DashSidebar from "../../dashComponents/dashSidebar";
// import DashNavbar from "../../dashComponents/navbar";
import { useEffect } from "react";
import "../../../styles/dash-css/style.css";
import MainSide from "../../dashComponents/mainSide";
// import DashFooter from "../../dashComponents/dashFooter";
// import { useState } from "react";
// import DashNavigator from "../../dashComponents/dashNavigation";
// import MobileMenu from "../../dashComponents/mobileMenu";
// import DashProduct from "./product";
import DashLayout from "../../layout/DashLayout";
import { getAuthToken } from "../../../helper/axiosConfig";
import isEmpty from "../../../utils/isEmpty";
import { getGlobalState, setGlobalState } from "../../common/store";
import { useNavigate } from "react-router";
import { useGetUser } from "../../../helper/api-hooks/useAuth";

const Dashboard = () => {
  const navigate = useNavigate();  
  return (
    <div className="dashboard-container">
      <DashLayout>
        <MainSide />
      </DashLayout>
      {/* <DashNavbar handleToggleIcon={handleToggleIcon} />
      {toggleIcon && (
        <MobileMenu
          toggleIcon={toggleIcon}
          handleCloseToggleIcon={handleCloseToggleIcon}
        />
      )} */}
      {/* <div className="sidebar-main-container">
        <DashSidebar />
        <MainSide />
        <DashProduct />
      </div>
      <DashFooter />
      <DashNavigator /> */}
    </div>
  );
};

export default Dashboard;
