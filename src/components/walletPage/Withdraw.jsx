import { RiErrorWarningLine } from "react-icons/ri";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import BankCard from "./BankCard";
import BankDetail from "../dashComponents/modal/bankDetail";

const WithdrawSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [warningIcon, setWarningIcon] = useState(false);
  const [detail, setDetail] = useState(false);
  const handleWarningIcon = () => {
    setWarningIcon(!warningIcon);
  };
  const handleDetail = () => {
    setDetail(true);
  };
  const handleCloseDetail = () => {
    setDetail(false);
  };
  const handleCardSelect = (cardId) => {
    setSelectedCard(cardId);
  };
  return (
    <div className="product-dash-container ">
      <div className="pro-main-container nopad">
        <div className="dashbor-text bord">Send Withdrawal Request</div>
        <div className="card-cont-head">
          <div className="dashbor-simple dep">
            Select the account you want to withdraw to.
          </div>

          <div className="bank-card-row">
            <BankCard
              forr={"radio1"}
              selectedCard={selectedCard}
              onSelect={handleCardSelect}
            />
            <BankCard
              forr={"radio2"}
              selectedCard={selectedCard}
              onSelect={handleCardSelect}
            />
          </div>
          <div className="btn-new">
            <button className="dash-btn bankbtn btnnn " onClick={handleDetail}>
              <AiOutlinePlus /> Add new Bank
            </button>
          </div>
          {detail && <BankDetail handleCloseDetail={handleCloseDetail} />}
        </div>
        <div className="restwal">
          <div className="dashbor-simple dep">
            How much do you want to withdraw?
          </div>
          <div className="amt-input-box btnnn">
            <input type="text" placeholder="Amount" className="amount-inp" />
            <span>Max</span>
          </div>
          <div className="curr-payable btnnn">
            <div className="cu-pay">
              Current Bal: <span>₦100,000</span>
            </div>
            <div className="cu-pay">
              Amount Payable: <span>₦98,000</span>
              <RiErrorWarningLine
                className="cancel hnd"
                size={12}
                onClick={handleWarningIcon}
              />
              {warningIcon && (
                <>
                  <div className="warn-bbox">
                    2% commission is deducted on your withdrawal amount.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="padd">
          <div className="btn-new ">
            <button className="dash-btn btnnn">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawSection;
