import { DashboardUsersData } from "../../Data/DashboardUsersData";
import "./DashboardUsers.scss";

const DashboardUsers = () => (
  <div className="dashboard_users">
    <div className="dashboard_users_content">
      <div className="dashboard_users_title">
        <h3>Kayıtlı Kulanıcılar</h3>
      </div>
      <div className="dashboard_users_main">
        {DashboardUsersData.map((data, index) => index <= 5 ?  (
          <div className="dashboard_users_main-item" key={index}>
            <div className="dashboard_users_main-item_image">
              <img src={data.image} alt="user pp" />
            </div>
            <div className="dashboard_users_main-item_name">
              <p>{data.name}</p>
            </div>
          </div>
        ) : '')}
      </div>
      <div className="dashboard_users_button">
        <button>Tüm Kulanıcılar</button>
      </div>
    </div>
  </div>
);

export default DashboardUsers;
