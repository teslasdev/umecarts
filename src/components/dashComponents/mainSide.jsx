import { RiErrorWarningLine } from "react-icons/ri";
import "../../styles/dash-css/mainSide.css";
import WarningModal from "./modal/warningModal";
import { useState } from "react";
const MainSide = () => {
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
        <div className="simple-icon">
          <div className="dashbor-simple">
            Your sales increased by <span>3%</span> this week. Keep it up with
            these new tips!
          </div>
          <RiErrorWarningLine
            className="cancel hnd"
            size={25}
            onClick={handleWarningIcon}
          />
          {warningIcon && <WarningModal />}
        </div>
        <div className="dashboard-main-box" onClick={handleCloseWarningIcon}>
          <div className="dash-category-row">
            <div className="dash-each-category del">
              <div className="category-title">Current Balance</div>
              <div className="category-number">₦50,000.00</div>
              <div className="dashbor-simple">Money ready for withdrawal </div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Total Sales</div>
              <div className="category-number">70</div>
              <div className="dashbor-simple">
                <span className="tot-count">2</span> sales this week
              </div>
            </div>
            <div className="dash-each-category">
              <div className="category-title">Total Earnings</div>
              <div className="category-number">₦9,970,000.00</div>
              <div className="dashbor-simple">
                <span className="tot-count">2</span> sales this week
              </div>
            </div>
            <div className="dash-each-category del">
              <div className="category-title">New Orders</div>
              <div className="category-number">10</div>
            </div>
            <div className="dash-each-category">
              <div className="category-title complete">Completed Orders</div>
              <div className="category-number">20</div>
              <div className="dashbor-simple">
                <span className="tot-count">5</span> completed this week
              </div>
            </div>
            <div className="dash-each-category">
              <div className="category-title cancel">Cancelled Orders</div>
              <div className="category-number">8</div>
              <div className="dashbor-simple">
                <span className="tot-count">1</span> cancelled this week
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSide;
