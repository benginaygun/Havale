import { NavLink } from "react-router-dom";
import "./ProfileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faRightFromBracket,
  faTicket,
  faUserGear,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const ProfileNav = () => (
  <nav className="profile_nav">
    <div className="profile_nav_content">
      <div className="profile_nav_preview">
        <div className="profile_nav_preview_image">
          <h2>BA</h2>
        </div>
        <div className="profile_nav_preview_fullname">
          <h4>Bengin Aygün</h4>
        </div>
      </div>
      <div className="profile_nav_links">
        <div className="profile_nav_link_box">
          <NavLink to={"/profile/moneytransfer"} className="profile_nav_link">
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Para Transferi</span>
          </NavLink>
        </div>
        <div className="profile_nav_link_box">
          <NavLink to={"/profile/wallet"} className="profile_nav_link">
            <FontAwesomeIcon icon={faWallet} />
            <span>Cüzdan</span>
          </NavLink>
        </div>
        <div className="profile_nav_link_box">
          <NavLink to={"/profile/usersettings"} className="profile_nav_link">
            <FontAwesomeIcon icon={faUserGear} />
            <span>Kullancı Bilgileri</span>
          </NavLink>
        </div>
        <div className="profile_nav_link_box">
          <NavLink to={"/"} className="profile_nav_link">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Çıkış Yap</span>
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default ProfileNav;
