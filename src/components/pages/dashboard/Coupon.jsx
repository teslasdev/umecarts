import { useState } from "react";
import CouponCard from "../../dashComponents/CouponCard";
import CouponForm from "../../dashComponents/CouponForm";
import DashLayout from "../../layout/DashLayout";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const Coupon = () => {
  const [couponForm, setCouponForm] = useState(false);
  const handleCouponForm = () => {
    setCouponForm(true);
  };
  return (
    <DashLayout>
      <div className="product-dash-container">
        {couponForm ? (
          <div className="pro-main-container">
            <CouponForm />
          </div>
        ) : (
          <>
            <div className="product-head-box">
              <div className="tit-body">
                <div className="dashbor-text">Coupons</div>
                <div className="dashbor-simple red">
                  Give discounts on products.
                </div>
              </div>
              <div className="btn-new">
                <button className="dash-btn" onClick={handleCouponForm}>
                  Add coupon
                </button>
              </div>
            </div>
            <div className="pro-main-container">
              {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">No coupon added!</div>
            <div className="pro-simple">You have not added any coupon yet.</div>
          </div>
         */}
              <div className="nonempty-wallet-container coup-padd">
                <div className="coupon-card-cont cha">
                  <div className="count-coup vidis">1</div>
                  <div className="coupon-details-box gad">
                    <div className="coupon-dlt ">Coupon code</div>
                    <div className="coupon-dlt">Coupon type</div>
                    <div className="coupon-dlt">Start date</div>
                    <div className="coupon-dlt">End date</div>
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

                <CouponCard />
                <CouponCard />
                <CouponCard />
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </DashLayout>
  );
};

export default Coupon;
