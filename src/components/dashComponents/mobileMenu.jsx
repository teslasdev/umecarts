import logo from "../../assets/logo/Vector.png";
import { BsGrid, BsHandbag, BsCart, BsCloudUpload } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiX } from "react-icons/hi";
import { PiWarningCircleBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { MdPayment, MdOutlineSettings } from "react-icons/md";
import grove from "../../assets/image/grovlogo.png";
const MobileMenu = ({ toggleIcon, handleCloseToggleIcon }) => {
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
                <div className="grov-txt">Grove Mill</div>
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
          <div className="sidebar-tem-com">
            <div className="sidebar-item-box">
              <BsGrid />
              <div className="sidebar-text">Dashboard</div>
            </div>
          </div>
          <div className="sidebar-item-box">
            <BsHandbag />
            <div className="sidebar-text">Product</div>
          </div>
          <div className="sidebar-item-box">
            <BsCart />
            <div className="sidebar-text">Orders</div>
          </div>
          <div className="sidebar-item-box">
            <IoChatboxEllipsesOutline />
            <div className="sidebar-text">Message</div>
          </div>
          <div className="sidebar-item-box">
            <BsCloudUpload />
            <div className="sidebar-text">Uploaded files</div>
          </div>
          <div className="sidebar-item-box">
            <MdPayment />
            <div className="sidebar-text">Payment</div>
          </div>
          <div className="sidebar-item-box">
            <HiOutlineReceiptRefund />
            <div className="sidebar-text">Refund request</div>
          </div>
          <div className="sidebar-item-box">
            <PiWarningCircleBold />
            <div className="sidebar-text">Support ticket</div>
          </div>
          <div className="sidebar-item-box">
            <TiDocumentText />
            <div className="sidebar-text">Coupons</div>
          </div>
          <div className="sidebar-item-box">
            <MdOutlineSettings />
            <div className="sidebar-text">Shop settings</div>
          </div>
          <div className="logout-box mdown">
            <AiOutlineLogout />
            <div className="logout-text">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
