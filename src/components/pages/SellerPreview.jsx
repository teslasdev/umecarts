import BannerLatest from "../SellerPreview/Banner";
import FeaturePreview from "../SellerPreview/FeaturePreview";
import DashFooter from "../dashComponents/dashFooter";
import DashNavbar from "../dashComponents/navbar";

const SellerPreview = () => {
  return (
    <div className="seller-preview-container">
      <DashNavbar />
      <BannerLatest />
      <div className="pad-feat px-10 py-10">
        <FeaturePreview />
      </div>

      <DashFooter />
    </div>
  );
};

export default SellerPreview;
