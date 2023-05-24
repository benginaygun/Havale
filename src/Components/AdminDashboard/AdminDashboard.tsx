import AdminTop from "../AdminTop/AdminTop";
import DashboardTransfers from "../DashboardTransfers/DashboardTransfers";
import DashboardUsers from "../DashboardUsers/DashboardUsers";
import "./AdminDashboard.scss";
import AdminDashboardCards from "./AdminDashboardCards/AdminDashboardCards";

const AdminDashboard = () => (
  <div className="admin_dashboard">
    <AdminTop title="Gösterge Paneli" />
    <AdminDashboardCards />
    <div className="admin_dashboard_main">
      <DashboardTransfers />
      <DashboardUsers />
    </div>
  </div>
);

export default AdminDashboard;
