const BankCard = ({ forr, selectedCard, onSelect }) => {
  return (
    <div
      className={`bank-card-col ${selectedCard === forr ? "selected" : ""}`}
      onClick={() => onSelect(forr)}
    >
      <div className="radio-acc-no">
        <input
          type="radio"
          name="card"
          class="bank-radio"
          id={forr}
          checked={selectedCard === forr}
          readOnly
        />
        <label
          htmlFor={forr}
          className={`custom-radio ${selectedCard === forr ? "checked" : ""}`}
        ></label>
        <div className="acc-no-bank">0704960493</div>
      </div>
      <div className="acc-no-bank gab">Guarantee Trust Bank</div>
      <div className="acc-name">Adepoju Samuel Oluwafemi</div>
    </div>
  );
};

export default BankCard;
