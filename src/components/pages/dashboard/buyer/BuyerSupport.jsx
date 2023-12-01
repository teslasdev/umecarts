import SupportCard from "../../../dashComponents/SupportCard";
import BuyerLayout from "../../../layout/BuyerLayout";
import DashLayout from "../../../layout/DashLayout";

const BuyerSupport = () => {
  return (
    <BuyerLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Support Ticket</div>
            <div className="dashbor-simple red">
              Request for support from the admin.
            </div>
          </div>
          <div className="btn-new">
            <button className="dash-btn">Request support</button>
          </div>
        </div>
        <div className="pro-main-container">
          {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">No Products Added!</div>
            <div className="pro-simple">
              You do not have any products added yet.
            </div>
          </div> */}
          <div className="nonempty-wallet-container">
            <SupportCard progress={"progress pend"} progressName={"Pending"}/>
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
};

export default BuyerSupport;
