import "../../../../styles/dash-css/style.css";
import BuyerSidebar from "../../../dashComponents/buyer/BuyerSidebar";
import BuyermainSide from "../../../dashComponents/buyer/BuyermainSide";
import BuyerLayout from "../../../layout/BuyerLayout";

const BuyerDashboard = ({data}) => {
  
  return (
    <div className="dashboard-container">
      <BuyerLayout>
       <div className="sidebar-main-container">
        <BuyerSidebar data={data}/>
        <BuyermainSide data={data} />
       </div>
      </BuyerLayout>
    </div>
  );
};

export default BuyerDashboard;
