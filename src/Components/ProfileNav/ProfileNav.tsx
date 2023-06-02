import { NavLink, useNavigate } from "react-router-dom";
import "./ProfileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faRightFromBracket,
  faTicket,
  faUserGear,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../redux/store/store";
import { logoutUser } from "../../redux/slices/auth/actionsCreators";
import Cookies from "js-cookie";
import { getUserInfo } from "../../redux/slices/user/actionCreators";

const ProfileNav = () => {

  const dispatch = useAppDispatch();
  const nav = useNavigate();
  function Logout() {
    Cookies.remove('token');
    dispatch(getUserInfo());
    // dispatch(logoutUser());
    nav('/');
  }

  return(
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
          <NavLink to={"/profile/moneytransfer/withdrawal"} className="profile_nav_link">
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
          <NavLink to={"/profile/usersettings/userinfo"} className="profile_nav_link">
            <FontAwesomeIcon icon={faUserGear} />
            <span>Kullancı Bilgileri</span>
          </NavLink>
        </div>
        <div className="profile_nav_link_box">
          <button onClick={Logout} className="profile_nav_link">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
)};

export default ProfileNav;
