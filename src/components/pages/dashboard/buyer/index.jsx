import "../../../../styles/dash-css/style.css";
import LogoutModal from "../../../common/logout-modal";
import BuyerSidebar from "../../../dashComponents/buyer/BuyerSidebar";
import BuyermainSide from "../../../dashComponents/buyer/BuyermainSide";
import BuyerLayout from "../../../layout/BuyerLayout";

const BuyerDashboard = () => {
  
  return (
    <div className="dashboard-container">
      <BuyerLayout>
        <BuyermainSide />
      </BuyerLayout>
    </div>
  );
};

export default BuyerDashboard;
