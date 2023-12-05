import { BsGlobe } from "react-icons/bs";
import "../../../styles/dash-css/shopSetting.css";
import ShippingFee from "../../dashComponents/shopSettingComp/shippingFee";
import Privacy from "../../dashComponents/shopSettingComp/privacy";
import BannerSocialLinks from "../../dashComponents/shopSettingComp/bannerSocial";
import BasicInfo from "../../dashComponents/shopSettingComp/basicIfo";
import { useState } from "react";
import UploadFileModal from "../../dashComponents/modal/uploadFileModal";
import BuyerLayout from "../../layout/BuyerLayout";
const ShopSetting = () => {
  const [UploadType ,setUploadType] = useState('')
  const [isUploadOpen ,setUpload] = useState(false)
  const [Logo , setLogo] = useState([])
  const [selectedSettingProgress, setSelectedSettingProgress] =
    useState("basic");

  return (
    <BuyerLayout>
      <div className="product-dash-container">
        <div className="sm:h-[75vh] h-full overflow-scroll">
        <div className="product-head-box cent">
          <div className="tit-body">
            <div className="dashbor-text">Settings</div>
            <div className="dashbor-simple red">
              Manage & personalise your shop preference.
            </div>
          </div>
        </div>
        <div className="pro-main-container noover">
          <div className="flex justify-around">
            <div
              onClick={() => setSelectedSettingProgress("basic")}
              className={`basic ${
                selectedSettingProgress === "basic"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga sm:text-[16px] text-[12px]">Basic Information</div>
            </div>
            <div
              onClick={() => setSelectedSettingProgress("privacy")}
              className={`privacy ${
                selectedSettingProgress === "privacy"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga sm:text-[16px] text-[12px]">Privacy & Security</div>
            </div>
          </div>
        </div>
        {selectedSettingProgress === "basic" && <BasicInfo Logo={Logo} setLogo={setLogo} setUploadType={setUploadType} setUpload={setUpload} UploadType={UploadType}/>}
        {selectedSettingProgress === "privacy" && <Privacy />}
        </div>
      </div>
      {isUploadOpen &&
        <UploadFileModal onChange={UploadType} onClick={() => setUpload(false)} setLogo={setLogo} Logo={Logo}/>
      }
    </BuyerLayout>
  );
};

export default ShopSetting;