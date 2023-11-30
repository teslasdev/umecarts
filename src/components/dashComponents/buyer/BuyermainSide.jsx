import "../../../styles/dash-css/mainSide.css";
import { useState } from "react";
const BuyermainSide = ({data}) => {
  const [warningIcon, setWarningIcon] = useState(false);
  const handleWarningIcon = () => {
    setWarningIcon(!warningIcon);
  };
  const handleCloseWarningIcon = () => {
    setWarningIcon(false);
  };
  return (
    <div className="main-side-container">
      <div className="main-box-content">
        <div className="dashbor-text">Dashboard</div>
        <div className="dashboard-main-box" onClick={handleCloseWarningIcon}>
          <div className="dash-category-row">
            <div className="dash-each-category del">
              <div className="category-title">Cart</div>
              <div className="category-number">{data?.shop?.wallet?.current_balance.toLocaleString()} <span className="text-sm">Products</span></div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Products Ordered</div>
              <div className="category-number">{data?.shop?.wallet?.total_sale}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Total Spent</div>
              <div className="category-number">₦{data?.shop?.wallet?.total_earnings.toLocaleString()}</div>
            </div>
            <div className="dash-each-category del">
              <div className="category-title">New Orders</div>
              <div className="category-number">{data?.shop?.wallet?.new_order}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title complete">Completed Orders</div>
              <div className="category-number">{data?.shop?.wallet?.completed_order}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title cancel">Cancelled Orders</div>
              <div className="category-number">{data?.shop?.wallet?.canceled_order}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyermainSide;
