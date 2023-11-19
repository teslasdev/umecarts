import OrderCard from "../OrderCard";

const PendingOrder = () => {
  return (
    <div className="pending-order-container">
      <>
        {/* <div className="emppty-pro-boc">
          <div className="dashbor-text">No pending order!</div>
          <div className="pro-simple">
            You do not have any pending order yet.
          </div>
        </div> */}
        <div className="nonempty-order-container">
          <OrderCard
            progress={"progress con-firm"}
            progressName={"Confirmed"}
          />
          <OrderCard
            progress={"progress con-firm"}
            progressName={"Confirmed"}
          />
        </div>
      </>
    </div>
  );
};

export default PendingOrder;
