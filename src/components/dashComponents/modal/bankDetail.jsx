import { IoCloseSharp } from "react-icons/io5";
import { GlobalContext } from "../../../context";
import { useContext, useState } from "react";
import isEmpty from "../../../utils/isEmpty";
import { FaHourglassEnd } from "react-icons/fa";
import { Loader } from "../../common/buttonLoader";

const BankDetail = ({ handleCloseDetail, editData }) => {
  //   const [selectedBank, setSelectedBank] = useState("select");

  //   const handleBankChange = (event) => {
  //     setSelectedBank(event.target.value);
  //   };
  const {bandDetails , setBankDetails} = useContext(GlobalContext)
  const [isLoading , setLoading] = useState(false)
  const [data , setData] = useState({
    bank : !isEmpty(editData) ? editData.bank : "",
    number : !isEmpty(editData) ? editData.number : "",
    name : !isEmpty(editData) ? editData.name : "",
  })
  const handleSave = () => {
    setLoading(true)
    setTimeout(() => {
      if(isEmpty(bandDetails)) {
        setBankDetails([data])
      } else {
        setBankDetails((prev) => [
          ...prev,
          data
        ])
      }
      handleCloseDetail(false)
      setLoading(false)
    }, 5000)
  }
  return (
    <div className="fixed w-full h-screen blur-bg top-0 z-30 left-0 flex flex-col justify-center items-center">
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
            <select name="bankname" id="bankname" value={data.bank} className="details-inp" onChange={(e) => setData({...data , bank : e.target.value})}>
              <option value="select" selected disabled>
                Select Bank Name
              </option>
              <option value="First Bank of Nigeria">First Bank of Nigeria</option>
              <option value="Wema Bank">Wema Bank</option>
              <option value="Zenith Bank">Zenith Bank</option>
            </select>
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Account Number</label>
            <input
              type="text"
              className="details-inp"
              placeholder="Enter Account Number... "
              value={data.number}
              onChange={(e) => setData({...data , number : e.target.value})}
            />
          </div>
          <div className="inp-lab-con">
            <label htmlFor="">Account Name</label>
            <input
              type="text"
              className="details-inp"
              placeholder="Type Account Name"
              value={data.name}
              onChange={(e) => setData({...data , name : e.target.value})}
            />
          </div>
          <button type="button" className="save-btn text-sm flex justify-center items-center" onClick={handleSave} disabled={isEmpty(data.name) ? true : false }>{isLoading ? <Loader /> : 'Save'}</button>
        </form>
      </div>
    </div>
  );
};

export default BankDetail;
