import OrderCard from "../OrderCard";

const Neworder = () => {
  return (
    <>
      {/* <div className="emppty-pro-boc">
        <div className="dashbor-text">No new order!</div>
        <div className="pro-simple">You do not have any new order yet.</div>
      </div> */}
      <div className="nonempty-order-container">
        <OrderCard progress={"prog-dis"} />
        <OrderCard progress={"prog-dis"} />
      </div>
    </>
  );
};

export default Neworder;
