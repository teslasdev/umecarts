import DashLayout from "../../layout/DashLayout";
import { BsGlobe } from "react-icons/bs";
import "../../../styles/dash-css/shopSetting.css";
import ShippingFee from "../../dashComponents/shopSettingComp/shippingFee";
import Privacy from "../../dashComponents/shopSettingComp/privacy";
import BannerSocialLinks from "../../dashComponents/shopSettingComp/bannerSocial";
import BasicInfo from "../../dashComponents/shopSettingComp/basicIfo";
import { useState } from "react";
import UploadFileModal from "../../dashComponents/modal/uploadFileModal";
const ShopSetting = () => {
  const [UploadType ,setUploadType] = useState('')
  const [isUploadOpen ,setUpload] = useState(false)
  const [Logo , setLogo] = useState([])
  const [selectedSettingProgress, setSelectedSettingProgress] =
    useState("basic");

  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="h-[75vh] overflow-scroll">
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
        <div className="pro-main-container noover">
          <div className="shop-sett-navigator">
            <div
              onClick={() => setSelectedSettingProgress("basic")}
              className={`basic ${
                selectedSettingProgress === "basic"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga">Basic Information</div>
            </div>
            <div
              onClick={() => setSelectedSettingProgress("banner")}
              className={`banner ${
                selectedSettingProgress === "banner"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga">Banners & Social links</div>
            </div>
            <div
              onClick={() => setSelectedSettingProgress("fee")}
              className={`fee ${
                selectedSettingProgress === "fee"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga">Shipping fees</div>
            </div>
            <div
              onClick={() => setSelectedSettingProgress("privacy")}
              className={`privacy ${
                selectedSettingProgress === "privacy"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga">Privacy & Security</div>
            </div>
          </div>
        </div>
        {selectedSettingProgress === "basic" && <BasicInfo Logo={Logo} setLogo={setLogo} setUploadType={setUploadType} setUpload={setUpload} UploadType={UploadType}/>}
        {selectedSettingProgress === "banner" && <BannerSocialLinks />}
        {selectedSettingProgress === "fee" && <ShippingFee />}
        {selectedSettingProgress === "privacy" && <Privacy />}
        </div>
      </div>
      {isUploadOpen &&
        <UploadFileModal onChange={UploadType} onClick={() => setUpload(false)} setLogo={setLogo} Logo={Logo}/>
      }
    </DashLayout>
  );
};

export default ShopSetting;