import { IoCloseSharp } from "react-icons/io5";

const BankDetail = ({ handleCloseDetail }) => {
  //   const [selectedBank, setSelectedBank] = useState("select");

  //   const handleBankChange = (event) => {
  //     setSelectedBank(event.target.value);
  //   };
  return (
    <div className="bank-detail-cont">
      <div className="close-head">
        <div className="det-head">Add Bank Account</div>
        <IoCloseSharp size={20} className="cls" onClick={handleCloseDetail} />
      </div>
      <div className="instruction">
        Note that your account details correlate with your Name/ Business name.
      </div>
      <form action="">
        <div className="inp-lab-con">
          <label htmlFor="">Bank Name</label>
          <select name="bankname" id="bankname" className="details-inp">
            <option value="select" selected disabled>
              Select Bank Name
            </option>
            <option value="fbn">First Bank of Nigeria</option>
            <option value="wema">Wema Bank</option>
            <option value="zen">Zenith Bank</option>
          </select>
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Account Number</label>
          <input
            type="text"
            className="details-inp"
            placeholder="Enter Account Number... "
          />
        </div>
        <div className="inp-lab-con">
          <label htmlFor="">Account Name</label>
          <input
            type="text"
            className="details-inp"
            placeholder="Type Account Name "
          />
        </div>
        <button className="save-btn">Save Detail</button>
      </form>
    </div>
  );
};

export default BankDetail;
