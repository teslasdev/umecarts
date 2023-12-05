import grove from "../../../assets/image/grovlogo.png";
import { GrFormClose } from "react-icons/gr";

const LogoModal = ({ fileName, handleFileClose }) => {
  return (
    <div className="logo-modal-cont">
      <div className="cls-icon" onClick={handleFileClose}>
        <GrFormClose />
      </div>
      <img src={grove} alt="" />
      <div className="file-name-size">
        <div className="file-nname">{fileName}</div>
        <div className="file-size">2 KB</div>
      </div>
    </div>
  );
};

export default LogoModal;