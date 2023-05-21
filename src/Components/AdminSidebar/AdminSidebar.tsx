import { Link, NavLink } from "react-router-dom";
import "./AdminSidebar.scss";
import dashboard from "../../assets/images/dashboard.png";
import partners from "../../assets/images/partner.png";
import allInvests from "../../assets/images/tum-yatirimlar.png";
import allWithdrawals from "../../assets/images/tum-cekimler.png";
import activeUsers from "../../assets/images/aktif-hesaplar.png";

const AdminSidebar = () => (
  <nav className="admin_sidebar">
    <div className="admin_sidebar_content">
      <div className="admin_sidebar_logo">
        <div className="admin_sidebar_logo">
          <Link className={"admin_sidebar_logo_link"} to={"/"}>
            <h2>LOGO</h2>
          </Link>
        </div>
      </div>
      <div className="admin_sidebar_main">
        <div className="admin_sidebar_links">
          <div className="admin_sidebar_links-item">
            <NavLink to={"/"} className="admin_sidebar_link">
              <div className="admin_sidebar_links-item_icon">
                <img src={dashboard} alt="admin link" />
              </div>
              <div className="admin_sidebar_links-item_text">
                <span>Gösterge Panel</span>
              </div>
            </NavLink>
          </div>
          <div className="admin_sidebar_links-item">
            <NavLink to={"/"} className="admin_sidebar_link">
              <div className="admin_sidebar_links-item_icon">
                <img src={partners} alt="admin link" />
              </div>
              <div className="admin_sidebar_links-item_text">
                <span>Partnerler</span>
              </div>
            </NavLink>
          </div>
          <div className="admin_sidebar_links-item">
            <NavLink to={"/"} className="admin_sidebar_link">
              <div className="admin_sidebar_links-item_icon">
                <img src={allInvests} alt="admin link" />
              </div>
              <div className="admin_sidebar_links-item_text">
                <span>Tüm Yatırımlar</span>
              </div>
            </NavLink>
          </div>
          <div className="admin_sidebar_links-item">
            <NavLink to={"/"} className="admin_sidebar_link">
              <div className="admin_sidebar_links-item_icon">
                <img src={allWithdrawals} alt="admin link" />
              </div>
              <div className="admin_sidebar_links-item_text">
                <span>Tüm Çekimler</span>
              </div>
            </NavLink>
          </div>
          <div className="admin_sidebar_links-item">
            <NavLink to={"/"} className="admin_sidebar_link">
              <div className="admin_sidebar_links-item_icon">
                <img src={activeUsers} alt="admin link" />
              </div>
              <div className="admin_sidebar_links-item_text">
                <span>Aktif Hesaplar</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default AdminSidebar;
