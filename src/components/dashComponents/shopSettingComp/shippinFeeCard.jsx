import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const ShippingFeeCard = () => {
  return (
    <div className="coupon-card-cont">
      <div className="count-coup">1</div>
      <div className="coupon-details-box">
        <div className="coupon-dlt mmm bc">Ile-Ife</div>
        <div className="coupon-dlt bx mmm">Osun</div>
        <div className="coupon-dlt mmm bm">#200</div>
      </div>
      <div className="action-btn">
        <div className="action-icon">
          <MdOutlineEdit className="" />
        </div>
        <div className="action-icon dele-red">
          <MdOutlineDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default ShippingFeeCard;