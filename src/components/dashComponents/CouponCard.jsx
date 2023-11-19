import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import "../../styles/dash-css/coupon.css";

const CouponCard = () => {
  return (
    <div className="coupon-card-cont">
      <div className="count-coup">1</div>
      <div className="coupon-details-box">
        <div className="coupon-dlt redl">goodday</div>
        <div className="coupon-dlt">Cart Base</div>
        <div className="coupon-dlt">16/07/2023</div>
        <div className="coupon-dlt">16/07/2023</div>
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

export default CouponCard;
