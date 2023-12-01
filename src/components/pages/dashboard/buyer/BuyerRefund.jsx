import { useState } from "react";
import DashLayout from "../../../layout/DashLayout";
import { HiOutlineSearch } from "react-icons/hi";
import OrderCard from "../../../dashComponents/OrderCard";
import orders from "../../../../utils/order.json";
import BuyerLayout from "../../../layout/BuyerLayout";

const BuyerRefund = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <BuyerLayout>
      <div className="product-dash-container">
        <div className="product-head-box">
          <div className="tit-body">
            <div className="dashbor-text">Refund Request</div>
            <div className="dashbor-simple red">
              See the request that has been sent to you for refund.
            </div>
          </div>
        </div>
        <div className="pro-main-container">
          <div className="search-procount-box">
            <div className="navig-wallet-cont ">
              <div
                className={
                  selectedCategory === "All"
                    ? "navig-each waal-act"
                    : "navig-each"
                }
                onClick={() => handleCategorySelect("All")}
              >
                All
              </div>
              <div
                className={
                  selectedCategory === "Pending"
                    ? "navig-each waal-act"
                    : "navig-each"
                }
                onClick={() => handleCategorySelect("Pending")}
              >
                Pending
              </div>
              <div
                className={
                  selectedCategory === "Approved"
                    ? "navig-each waal-act"
                    : "navig-each"
                }
                onClick={() => handleCategorySelect("Approved")}
              >
                Approved
              </div>
            </div>
            <input
              type="text"
              className={searchToggleIcon ? "search-inp disp" : "search-inp"}
              placeholder="Search for a product..."
            />
            <HiOutlineSearch
              className="search-icon"
              onClick={handleSearchToggleIcon}
            />
          </div>
          {/* <div className="emppty-pro-boc">
            <div className="dashbor-text">No refund request!</div>
            <div className="pro-simple">
              No refund request has been sent to you yet.
            </div>
          </div> */}
          <div className="nonempty-wallet-container">
            {/* {orders.map(
              (item, index) =>
                (selectedCategory === "All" ||
                  item.credeb === selectedCategory) && (
                  <OrderCard key={index} props={item} />
                )
            )} */}
            <OrderCard progress={"progress pend"} progressName={"Pending"} />
            <OrderCard
              progress={"progress comp-lete"}
              progressName={"Approved"}
            />
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
};

export default BuyerRefund;
