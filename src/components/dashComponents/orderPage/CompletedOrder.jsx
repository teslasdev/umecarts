import OrderCard from "../OrderCard";

const CompletedOrder = () => {
  return (
    <div className="complete-order">
      <>
        {/* <div className="emppty-pro-boc">
      <div className="dashbor-text">No completed order!</div>
      <div className="pro-simple">
        You do not have any completed order yet.
      </div>
    </div> */}
        <div className="nonempty-order-container">
          <OrderCard
            progress={"progress comp-lete"}
            progressName={"Delivered"}
          />
          <OrderCard
            progress={"progress comp-lete"}
            progressName={"Delivered"}
          />
        </div>
      </>
    </div>
  );
};

export default CompletedOrder;
