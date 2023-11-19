import { useState } from "react";
import "../../../styles/dash-css/order.css";
import { HiOutlineSearch } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import DashLayout from "../../layout/DashLayout";
import CompletedOrder from "../../dashComponents/orderPage/CompletedOrder";
import CancelledOrder from "../../dashComponents/orderPage/CancelledOrder";
import PendingOrder from "../../dashComponents/orderPage/PendingOrder";
import Neworder from "../../dashComponents/orderPage/NewOrder";
import OrderModal from "../../dashComponents/modal/orderModal";

const DashOrder = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const [toggleOption, setToggleOption] = useState(false);
  const [selectedOrderProgress, setSelectedOrderProgress] = useState("new");
  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  const handleToggleOption = () => {
    setToggleOption(!toggleOption);
  };
  const handleOptionSelect = (progress) => {
    setSelectedOrderProgress(progress);
  };
  return (
    <DashLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Orders</div>
            <div className="dashbor-simple red">
              Find and manage your orders.
            </div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="navigator-items-box">
            <div
              onClick={() => setSelectedOrderProgress("new")}
              className={`new ${
                selectedOrderProgress === "new"
                  ? "navigator-item act-order"
                  : "navigator-item"
              }`}
            >
              <div className="navigator-txt">New</div>
            </div>
            <div
              onClick={() => setSelectedOrderProgress("pending")}
              className={`pending ${
                selectedOrderProgress === "pending"
                  ? "navigator-item act-order"
                  : "navigator-item"
              }`}
            >
              <div className="navigator-txt">Pending</div>
            </div>
            <div
              onClick={() => setSelectedOrderProgress("completed")}
              className={`completed ${
                selectedOrderProgress === "completed"
                  ? "navigator-item act-order"
                  : "navigator-item"
              }`}
            >
              <div className="navigator-txt">Completed</div>
            </div>
            <div
              onClick={() => setSelectedOrderProgress("cancelled")}
              className={`cancelled ${
                selectedOrderProgress === "cancelled"
                  ? "navigator-item act-order"
                  : "navigator-item"
              }`}
            >
              <div className="navigator-txt">Cancelled</div>
            </div>
          </div>
          <div className="search-procount-box end">
            <div className="sel-opt" onClick={handleToggleOption}>
              <div className="opt-txt">
                {selectedOrderProgress === "new" && <span>New</span>}
                {selectedOrderProgress === "pending" && <span>Pending</span>}
                {selectedOrderProgress === "completed" && (
                  <span>Completed</span>
                )}
                {selectedOrderProgress === "cancelled" && (
                  <span>Cancelled</span>
                )}
              </div>
              {toggleOption ? (
                <FiChevronUp className="arr" />
              ) : (
                <FiChevronDown className="arr" />
              )}
              {toggleOption && (
                <OrderModal
                  setSelectedOrderProgress={setSelectedOrderProgress}
                  selectedOrderProgress={selectedOrderProgress}
                  onOptionSelect={handleOptionSelect}
                />
              )}
            </div>
            <input
              type="text"
              className={searchToggleIcon ? "search-inp disp" : "search-inp"}
              placeholder="Search keyword or order code..."
            />
            <HiOutlineSearch
              className="search-icon"
              onClick={handleSearchToggleIcon}
            />
          </div>
          {selectedOrderProgress === "new" && <Neworder />}
          {selectedOrderProgress === "pending" && <PendingOrder />}
          {selectedOrderProgress === "completed" && <CompletedOrder />}
          {selectedOrderProgress === "cancelled" && <CancelledOrder />}
        </div>
      </div>
    </DashLayout>
  );
};

export default DashOrder;
