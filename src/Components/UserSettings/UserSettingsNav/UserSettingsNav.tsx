import { Link, NavLink } from "react-router-dom";
import "./UserSettingsNav.scss";

const UserSettingsNav = () => (
  <nav className="user_settings_nav">
    <div className="user_settings_nav_links">
      <div className="user_settings_nav_links-item">
        <NavLink
          to={"/profile/usersettings/userinfo"}
          className="user_settings_nav_link"
        >
          Üyelik bilgilerim
        </NavLink>
      </div>
      <div className="user_settings_nav_links-item">
        <NavLink
          to={"/profile/usersettings/changepassword"}
          className="user_settings_nav_link"
        >
          Şifre değişikliği
        </NavLink>
      </div>
      <div className="user_settings_nav_links-item">
        <NavLink
          to={"/profile/usersettings/bankinfo"}
          className="user_settings_nav_link"
        >
          Banka bilgilerim
        </NavLink>
      </div>
    </div>
  </nav>
);

export default UserSettingsNav;
