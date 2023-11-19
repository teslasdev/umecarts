import OrderCard from "../OrderCard";

const CancelledOrder = () => {
  return (
    <div className="cancelled-order">
      <>
        {/* <div className="emppty-pro-boc">
  <div className="dashbor-text">No cancelled order!</div>
  <div className="pro-simple">
    You do not have any cancelled order yet.
  </div>
</div> */}
        <div className="nonempty-order-container">
          <OrderCard progress={"progress can-cel"} progressName={"Cancelled"} />
          <OrderCard progress={"progress can-cel"} progressName={"Cancelled"} />
        </div>
      </>
    </div>
  );
};

export default CancelledOrder;
