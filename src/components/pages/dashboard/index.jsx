
import "../../../styles/dash-css/style.css";
import MainSide from "../../dashComponents/mainSide";
import DashLayout from "../../layout/DashLayout";

const Dashboard = ({data}) => {
  
  return (
    <div className="dashboard-container">
      <DashLayout>
        <MainSide data={data} />
      </DashLayout>
    </div>
  );
};

export default Dashboard;
