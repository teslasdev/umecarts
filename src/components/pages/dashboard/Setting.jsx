import { BsGlobe } from "react-icons/bs";
import "../../../styles/dash-css/shopSetting.css";
import Privacy from "../../dashComponents/shopSettingComp/privacy";
import {useState } from "react";
import UploadFileModal from "../../dashComponents/modal/uploadFileModal";
import BuyerLayout from "../../layout/BuyerLayout";
import { useGetUser } from "../../../helper/api-hooks/useAuth";
import BasicBuyerInfo from "../../dashComponents/shopSettingComp/basicBuyerInfo";
const ShopSetting = () => {
  const [UploadType ,setUploadType] = useState('')
  const [isUploadOpen ,setUpload] = useState(false)
  const [Logo , setLogo] = useState([])
  const [selectedSettingProgress, setSelectedSettingProgress] =useState("basic");
  const { data ,refetch  } = useGetUser();
  return (
    <BuyerLayout>
      <div className="product-dash-container">
        <div className="sm:h-[75vh] sm:overflow-scroll">
        <div className="product-head-box cent">
          <div className="tit-body">
            <div className="dashbor-text">Settings</div>
            <div className="dashbor-simple red">
              Manage & personalise your shop preference.
            </div>
          </div>
        </div>
        <div className="pro-main-container noover">
          <div className="flex justify-between">
            <div
              onClick={() => setSelectedSettingProgress("basic")}
              className={`basic bg-red ${
                selectedSettingProgress === "basic"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga sm:text-[16px] text-[14px]">Basic Information</div>
            </div>
            <div
              onClick={() => setSelectedSettingProgress("privacy")}
              className={`privacy ${
                selectedSettingProgress === "privacy"
                  ? "navigator-item act-order mcd"
                  : "navigator-item"
              }`}
            >
              <div className="shop-naviga sm:text-[16px] text-[14px]">Privacy & Security</div>
            </div>
          </div>
        </div>
        {selectedSettingProgress === "basic" && <BasicBuyerInfo Logo={Logo} setLogo={setLogo} setUploadType={setUploadType} setUpload={setUpload} UploadType={UploadType} data={data} />}
        {selectedSettingProgress === "privacy" && <Privacy data={data} />}
        </div>
      </div>
      {isUploadOpen &&
        <UploadFileModal onChange={UploadType} onClick={() => setUpload(false)} setLogo={setLogo} Logo={Logo}/>
      }
    </BuyerLayout>
  );
};

export default ShopSetting;