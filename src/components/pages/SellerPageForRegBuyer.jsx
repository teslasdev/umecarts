import BannerLatest from "../SellerPreview/Banner";
import FeaturePreview from "../SellerPreview/FeaturePreview";
import Layout from "../layout/Layout";

const SellerPageForRegBuyer = () => {
  return (
    <Layout>
      <div className="seller-preview-container">
        <BannerLatest />
        <div className="pad-feat px-10 py-10">
          <FeaturePreview />
        </div>
      </div>
    </Layout>
  );
};

export default SellerPageForRegBuyer;
