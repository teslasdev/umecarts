import "../../styles/dash-css/dashNavigator.css";
import { MdOutlineSettings } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
const DashNavigator = () => {
  return (
    <div className="dash-navigator-container">
      <div className="each-navigator">
        <BiHome className="navgi-icon" />
        <p>Store</p>
      </div>
      <div className="each-navigator">
        <IoChatboxEllipsesOutline className="navgi-icon" />
        <p>Message</p>
        <span className="msg-cnt">+0</span>
      </div>
      <div className="each-navigator">
        <MdOutlineSettings className="navgi-icon" />
        <p>Shop Settings</p>
      </div>
    </div>
  );
};

export default DashNavigator;
