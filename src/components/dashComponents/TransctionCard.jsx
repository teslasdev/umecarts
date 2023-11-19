const TransactionCard = ({ props }) => {
  return (
    <div className="transac-card-container">
      <div className="init-name-head-box">
        <div className={`init-name  ${props.credeb}`}>{props.init}</div>
        <div className="headline-time">
          <div className="head-line">{props.head}</div>
          <div className="alert-time">4:30 PM</div>
        </div>
      </div>
      <div className="amt-text">{props.amount}</div>
    </div>
  );
};

export default TransactionCard;
