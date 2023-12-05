import "../../../styles/dash-css/shopComponent.css";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import ShippingFeeCard from "./shippinFeeCard";

const ShippingFee = () => {
  return (
    <>
      <div className="pro-main-container">
        <div className="close-head al-head">
          <div className="det-head">Shipping fees</div>
          <div className="btn-new with rit">
            <button className="dash-btn ind reddd">Add new</button>
          </div>
        </div>
        {/* <div className="emppty-pro-boc">
          <div className="dashbor-text">No shipping fee set!</div>
          <div className="pro-simple">
            You have not set any shipping fee yet for any location.
          </div>
        </div> */}
        <div className="nonempty-wallet-container coup-padd ">
          <div className="coupon-card-cont cha nm">
            <div className="count-coup vidis">1</div>
            <div className="coupon-details-box gad imp">
              <div className="coupon-dlt mmm">City</div>
              <div className="coupon-dlt mmm">State</div>
              <div className="coupon-dlt mmm">Shipping fee</div>
            </div>
            <div className="action-btn vidis">
              <div className="action-icon">
                <MdOutlineEdit className="" />
              </div>
              <div className="action-icon dele-red">
                <MdOutlineDeleteOutline />
              </div>
            </div>
          </div>
          <ShippingFeeCard />
          <ShippingFeeCard />
        </div>
      </div>
    </>
  );
};

export default ShippingFee;