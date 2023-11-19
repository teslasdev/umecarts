import DashLayout from "../../layout/DashLayout";
import { BsGlobe } from "react-icons/bs";
import { PiWarningCircleBold } from "react-icons/pi";
import "../../../styles/dash-css/shopSetting.css";
const ShopSetting = () => {
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box cent">
          <div className="tit-body">
            <div className="dashbor-text">shopsetting</div>
            <div className="dashbor-simple red">
              Manage & personalise your shop preference.
            </div>
          </div>
          <div className="preview-shop">
            <div className="prev-text">Preview shop</div>
            <BsGlobe />
          </div>
        </div>
        <div className="pro-main-container">
          <div className="shop-sett-navigator">
            <div className="shop-naviga">Basic Information</div>
            <div className="shop-naviga">Banners & Social links</div>
            <div className="shop-naviga">Shipping fees</div>
            <div className="shop-naviga">Privacy & Security</div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="close-head">
            <div className="det-head">Personal Information</div>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              className="details-inp"
              placeholder="Grove Mill"
            />
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              className="details-inp"
              placeholder="thewinehouse@gmail.com"
            />
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              className="details-inp"
              placeholder="07064422483"
            />
          </div>
          <div className="close-head">
            <div className="det-head">Shop Information</div>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Shop Name</label>
            <div className="inp-com">
              <input
                type="email"
                className="details-inp"
                placeholder="thewinehouse"
              />
              <div className="ume-com">.umecarts.com</div>
            </div>
          </div>
          <div className="shop-warnn">
            <PiWarningCircleBold />{" "}
            <span>
              Your shop name will be used as prefix for your personal domain
            </span>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Shop Address</label>
            <input
              type="email"
              className="details-inp"
              placeholder="Opolo Hub, Campus gate, Ife-Ife"
            />
          </div>
        </div>
      </div>
    </DashLayout>
  );
};

export default ShopSetting;
