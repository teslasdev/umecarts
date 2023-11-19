import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteForever } from "react-icons/md";
import {  BiShareAlt } from "react-icons/bi";
import {AiOutlineCopy} from 'react-icons/ai'

const ProductModal = () => {
  return (
    <div className="pro-modal-container">
      <div className="lis-item-box">
        <FiEdit className="edi mod-icon" />
        <div className="item-tst">Edit</div>
      </div>
      <div className="lis-item-box">
        <AiOutlineCopy className="dup mod-icon" />
        <div className="item-tst">Duplicate</div>
      </div>
      <div className="lis-item-box">
        <BiShareAlt className="sha mod-icon" />
        <div className="item-tst">Share</div>
      </div>
      <div className="lis-item-box">
        <MdOutlineDeleteForever className="dele mod-icon" />
        <div className="item-tst">Delete</div>
      </div>
    </div>
  );
};

export default ProductModal;
