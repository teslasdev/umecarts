import payment from "../../assets/image/payment.png";
import "../../styles/dash-css/footer.css";
const DashFooter = () => {
  return (
    <div className="dash-footer-container md:flex hidden">
      <div className="footer-txt">© umecarts (maxeps group)</div>
      <img src={payment} alt="" />
    </div>
  );
};

export default DashFooter;
