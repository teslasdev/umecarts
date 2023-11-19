const OrderModal = ({
  selectedOrderProgress,
  setSelectedOrderProgress,
  onOptionSelect,
}) => {
  const handleOptionClick = (progress) => {
    setSelectedOrderProgress(progress);
    onOptionSelect(progress); // Pass the selected progress back to the parent component
  };
  return (
    <div className="order-modal-box">
      <div
        onClick={() => handleOptionClick("new")}
        className={`new ${selectedOrderProgress === "new" ? "opt" : "opt"}`}
      >
        New
      </div>
      <div
        onClick={() => handleOptionClick("pending")}
        className={`pending ${
          selectedOrderProgress === "pending" ? "opt" : "opt"
        }`}
      >
        Pending
      </div>
      <div
        onClick={() => handleOptionClick("completed")}
        className={`completed ${
          selectedOrderProgress === "completed" ? "opt" : "opt"
        }`}
      >
        Completed
      </div>
      <div
        onClick={() => handleOptionClick("cancelled")}
        className={`cancelled ${
          selectedOrderProgress === "cancelled" ? "opt nbb" : "opt nbb"
        }`}
      >
        Cancelled
      </div>
    </div>
  );
};

export default OrderModal;
