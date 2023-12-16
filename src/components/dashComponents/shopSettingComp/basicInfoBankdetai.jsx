import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";

const BasicInfoBankDetail = ({ status, bankName, accNo , accountName , index , onDelete , onEdit}) => {
  return (
    <div className="basic-bank-detail" key={index}>
      <div className="left-side-detail">
        <div className="acc-num-default">
          <div className="basic-acc-num">{accNo}</div>
          {index == 0 && <div className="default rounded-full">{status}</div> }
        </div>
        <div className="basic-bank-name">{bankName}</div>
        <div className="basic-acc-name">{accountName}</div>
      </div>
      <div className="right-side-detail">
        <div className="action-icon" onClick={onEdit}>
          <MdOutlineEdit className="" />
        </div>
        <div className="action-icon dele-red cursor-pointer" onClick={onDelete}>
          <MdOutlineDeleteOutline />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoBankDetail;