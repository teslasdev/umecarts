import "../../../styles/dash-css/sidebar.css";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
import LogoutModal from "../../common/logout-modal";
import { useContext, useState } from "react";
import { successToast } from "../../common/CustomToast";
import { setGlobalState } from "../../common/store";
import { GlobalContext } from "../../../context";
const BuyerSidebar = ({ toggleIcon }) => {
  const [isOpen , setIsOpen] = useState(false)
  const navigate = useNavigate()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to "auto" for instant scroll
    });
  };
  const handleNavLinkClick = () => {
    console.log("NavLink clicked");
    scrollToTop();
  };
 

  const {userData} = useContext(GlobalContext)
  const handleLogout = () => {
    localStorage.removeItem('umecartsToken');
    localStorage.setItem('guest' , JSON.stringify(false))
    setGlobalState('AuthToken', false)
    successToast({
      message: "Logged out successfully",
      position: "bottom-left",
    });
    
    window.location.href='/'
  }
  return (
    <div className="dash-sidebar-container">
      <div className="sidebar-box">
        <NavLink
          to="/buyer/dashboard"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsGrid />
          <div className="sidebar-text">Dashboard</div>
        </NavLink>
        <NavLink
          to="/orders"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <BsCart />
          <div className="sidebar-text">Orders</div>
        </NavLink>
        <NavLink
          to="/messages"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <IoChatboxEllipsesOutline />
          <div className="sidebar-text">Message</div>
        </NavLink>
        <NavLink
          to="/wallets"
          onClick={handleNavLinkClick}
          exact
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <MdPayment />
          <div className="sidebar-text">Payment</div>
        </NavLink>
        <NavLink
          to="/refund"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <HiOutlineReceiptRefund />
          <div className="sidebar-text">Refund request</div>
        </NavLink>
        <NavLink
          to="/support"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <RiErrorWarningLine />
          <div className="sidebar-text">Support ticket</div>
        </NavLink>
        <NavLink
          to="/setting"
          exact
          onClick={handleNavLinkClick}
          className={({ isActive }) =>
            isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
          }
        >
          <MdOutlineSettings />
          <div className="sidebar-text">Shop settings</div>
        </NavLink>
         <div className="logout-box absolute w-full bottom-10 bg-[#001229]">
          <div className="h-[32px] w-[32px] bg-gray-500 rounded-full">
            <img src={process.env.REACT_APP_S3_ENDPOINT+'/'+userData?.user?.profile_picture} className="w-full h-full object-cover rounded-full"/>
          </div>
          <div className="text-sm text-white">{userData?.user?.firstname} {userData?.user?.lastname.substring(0,10)}</div>
        </div>

         <div className="logout-box absolute bottom-0" onClick={() => setIsOpen(true)}>
          <AiOutlineLogout />
          <div className="logout-text">Log out</div>
        </div>
      </div>
      {isOpen &&
        <LogoutModal title={"Are you sure you want to logout"} onClose={() => setIsOpen(false)} onClick={() => handleLogout()}/>
      }
    </div>
  );
};

export default BuyerSidebar;
