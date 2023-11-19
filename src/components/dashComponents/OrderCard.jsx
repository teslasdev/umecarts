import shoe from "../../assets/products/product4.png";
const OrderCard = ({ progress, progressName }) => {
  return (
    <div className="order-card-container">
      <div className="img-pri-name-box">
        <div className="index-text">1.</div>
        <div className="order-dat-txt">20230408-11595550</div>
        <div className="img-pri-name-container">
          <img src={shoe} alt="" />
          <div className="name-pric-box">
            <div className="order-name">Louis Vuitton Pam slipper</div>
            <div className="siz-gen-text">41/Male/Green</div>
            <div className="pric-quntity">
              ₦12,500 x5 <span> Qty</span>
            </div>
          </div>
        </div>
      </div>
      <div className={progress}>{progressName}</div>
      <div className="total-cost">₦62,500</div>
    </div>
  );
};

export default OrderCard;
