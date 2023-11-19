import "../../styles/dash-css/sidebar.css";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
const DashSidebar = ({ toggleIcon }) => {
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
  return (
    <div className="dash-sidebar-container">
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
        <div className="logout-box">
          <AiOutlineLogout />
          <div className="logout-text">Log out</div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
