import { HiOutlineSearch } from "react-icons/hi";
import DashLayout from "../../layout/DashLayout";
import "../../../styles/dash-css/wallet.css";
import { useState } from "react";
import TransactionCard from "../../dashComponents/TransctionCard";
import transactions from "../../../utils/transaction.json";
import WithdrawSection from "../../walletPage/Withdraw";
const Wallet = () => {
  const [searchToggleIcon, setSearchToggleIcon] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [withSection, setWithSection] = useState(false);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  const handleWithSection = () => {
    setWithSection(true);
  };

  const handleSearchToggleIcon = () => {
    setSearchToggleIcon(!searchToggleIcon);
  };
  return (
    <DashLayout>
      {withSection ? (
        <WithdrawSection />
      ) : (
        <div className="product-dash-container">
          <div className="product-head-box">
            <div className="tit-body">
              <div className="dashbor-text">Payment</div>
              <div className="dashbor-simple red">
                Manage your transactions here
              </div>
            </div>
          </div>
          <div className="pro-main-container">
            <div className="nonempty-pro-container">
              <div className="dash-each-categor">
                <div className="category-title">Current Balance</div>
                <div className="category-number">₦50,000.00</div>
                <div className="dashbor-simple">
                  You can send a withdrawal request for your current balance.
                </div>
                <div className="btn-new with">
                  <button className="dash-btn ind" onClick={handleWithSection}>
                    Send withdrawal request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pro-main-container">
            <div className="dashbor-text">Transaction History</div>
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
                    selectedCategory === "credit"
                      ? "navig-each waal-act"
                      : "navig-each"
                  }
                  onClick={() => handleCategorySelect("credit")}
                >
                  Credit
                </div>
                <div
                  className={
                    selectedCategory === "debit"
                      ? "navig-each waal-act"
                      : "navig-each"
                  }
                  onClick={() => handleCategorySelect("debit")}
                >
                  Debit
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
            <div className="dashbor-text">
              Your Transaction History is Empty!
            </div>
            <div className="pro-simple">
              You do not have any transaction history yet.
            </div>
          </div> */}
            <div className="nonempty-wallet-container">
              <div className="trans-date">29th June, 2023</div>
              {transactions.map(
                (trans, index) =>
                  (selectedCategory === "All" ||
                    trans.credeb === selectedCategory) && (
                    <TransactionCard key={index} props={trans} />
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </DashLayout>
  );
};

export default Wallet;
