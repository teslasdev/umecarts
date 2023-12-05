import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const BasicInfoBankDetail = ({ status, bankName, accNo }) => {
  return (
    <div className="basic-bank-detail">
      <div className="left-side-detail">
        <div className="acc-num-default">
          <div className="basic-acc-num">{accNo}</div>
          <div className="default">{status}</div>
        </div>
        <div className="basic-bank-name">{bankName}</div>
        <div className="basic-acc-name">Adepoju Samuel Oluwafemi</div>
      </div>
      <div className="right-side-detail">
        <div className="action-icon">
          <MdOutlineEdit className="" />
        </div>
        <div className="action-icon dele-red">
          <MdOutlineDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoBankDetail;