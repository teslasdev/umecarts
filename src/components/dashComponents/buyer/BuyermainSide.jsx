import { useGetUser } from "../../../helper/api-hooks/useAuth";
import "../../../styles/dash-css/mainSide.css";
import { useEffect, useState } from "react";
const BuyermainSide = () => {
  const [warningIcon, setWarningIcon] = useState(false);
  const handleWarningIcon = () => {
    setWarningIcon(!warningIcon);
  };
  const handleCloseWarningIcon = () => {
    setWarningIcon(false);
  };
  const { data ,refetch  } = useGetUser();
  useEffect(() => {
    if(!data?.user) {
      refetch()
    }
  },[data , refetch])
  return (
    <div className="main-side-container">
      <div className="main-box-content">
        <div className="dashbor-text">Dashboard</div>
        <div className="dashboard-main-box" onClick={handleCloseWarningIcon}>
          <div className="dash-category-row">
            <div className="dash-each-category del">
              <div className="category-title">Cart</div>
              <div className="category-number">{data?.user?.wallet?.cart} <span className="text-sm">Products</span></div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Products Ordered</div>
              <div className="category-number">{data?.user?.wallet?.product_ordered}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Total Spent</div>
              <div className="category-number">₦{data?.user?.wallet?.total_spent.toLocaleString()}</div>
            </div>
            <div className="dash-each-category del">
              <div className="category-title">New Orders</div>
              <div className="category-number">{data?.user?.wallet?.new_order}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title complete">Completed Orders</div>
              <div className="category-number">{data?.user?.wallet?.completed_order}</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title cancel">Cancelled Orders</div>
              <div className="category-number">{data?.user?.wallet?.canceled_order}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyermainSide;
