import logo from "../../assets/logo/Vector.png";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiX } from "react-icons/hi";
import { PiWarningCircleBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
import grove from "../../assets/image/grovlogo.png";
import { GlobalContext } from "../../context";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";
import { setGlobalState } from "../common/store";
import { successToast } from "../common/CustomToast";
import LogoutModal from "../common/logout-modal";
const MobileMenu = ({ toggleIcon, handleCloseToggleIcon }) => {
  const [isOpen , setIsOpen] = useState(false)
  const {userData} = useContext(GlobalContext)
   const handleNavLinkClick = () => {
    console.log("NavLink clicked");
  };
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
    // <div className={toggleIcon ? "" : "mobile-menu-container"}>
    <div className="mobile-menu-container">
      <div className="menu-mobile-box">
        <div className="logo-nav">
          <div className="logo-image">
            <img src={logo} className="um-dash-logo" />
          </div>
          <div className="nav-down-box">
            <div className="grov-image-mill">
              <img src={grove} className="um-grov-logo" />
              <div className="grov-drink-box">
                <div className="grov-txt">{userData?.shop?.shopName}</div>
                <div className="product-cat-con">
                  <div className="cat-it rm">
                    <div className="cat-item">Drinks</div>
                  </div>
                  <div className="cat-it">
                    <div className="cat-item">Food</div>
                  </div>
                  <div className="cat-it itno">
                    <div className="cat-item">Gin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="notification-box">
              <HiX className="dash-menu" onClick={handleCloseToggleIcon} />
            </div>
          </div>
        </div>
        <div className="sidebar-box">
            <NavLink
              to="/seller/dashboard"
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
              to="/seller/products"
              exact
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
              }
            >
              <BsHandbag />
              <div className="sidebar-text">Product</div>
            </NavLink>
            <NavLink
              to="/dashorder"
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
              to="/dashmessage"
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
              to="/uploadfile"
              exact
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
              }
            >
              <BsCloudUpload />
              <div className="sidebar-text">Uploaded files</div>
            </NavLink>
            <NavLink
              to="/wallet"
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
              to="/coupon"
              exact
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
              }
            >
              <TiDocumentText />
              <div className="sidebar-text">Coupons</div>
            </NavLink>
            <NavLink
              to="shop"
              exact
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive ? "active-link sidebar-item-box" : "sidebar-item-box"
              }
            >
              <MdOutlineSettings />
              <div className="sidebar-text">Shop settings</div>
            </NavLink>
         
          <div className="logout-box" onClick={() => setIsOpen(true)}>
            <AiOutlineLogout />
            <div className="logout-text">Log out</div>
          </div>
        </div>
      </div>
      {isOpen &&
        <LogoutModal title={"Are you sure you want to logout"} onClose={() => setIsOpen(false)} onClick={() => handleLogout()}/>
      }
    </div>
  );
};

export default MobileMenu;
