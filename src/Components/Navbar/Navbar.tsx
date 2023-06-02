import { Link, NavLink } from "react-router-dom";
import CustomContainer from "../CustomContainer/CustomContainer";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store/store";
import Cookies from "js-cookie";
import { getUserInfo } from "../../redux/slices/user/actionCreators";

const Navbar = () => {
  function SidebarToggle() {
    const sidebar: HTMLDivElement = document.querySelector(".sidebar")!;
    if (
      sidebar.className === "sidebar" ||
      sidebar.className === "sidebar sidebar_closed"
    ) {
      sidebar.className = "sidebar sidebar_opened";
    } else {
      sidebar.className = "sidebar sidebar_closed";
    }
  }

  const isLogged = Cookies.get('token');

  const dispatch = useAppDispatch();
  const userData = useSelector((state:RootState) => state.user.userData);
  // dispatch(getUserInfo());


  useEffect(() => {
    const loginBtn = document.querySelector(".navbar_login_link");
    const login: HTMLDivElement = document.querySelector(".login_content")!;
    const registerBtn = document.querySelector(".navbar_register_link");
    const register: HTMLDivElement =
      document.querySelector(".register_content")!;
    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        login.style.display = "grid";
      });
    }
    if (registerBtn) {
      registerBtn.addEventListener("click", () => {
        register.style.display = "grid";
      });
    }
    dispatch(getUserInfo());
  }, []);


  return (
    <nav className="navbar">
      <CustomContainer>
        <div className="navbar_content">
          <div className="navbar_logo">
            <NavLink
              className={"navbar_logo_link"}
              to={"/hevaleadmin/dashboard"}
            >
              <h2>LOGO</h2>
            </NavLink>
          </div>
          <div className="navbar_links">
            <div className="navbar_links-item">
              <NavLink className={"navbar_link"} to={"/"}>
                Hakımızda
              </NavLink>
            </div>
            <div className="navbar_links-item">
              <NavLink className={"navbar_link"} to={"/"}>
                Güvenlik
              </NavLink>
            </div>
            <div className="navbar_links-item">
              <NavLink className={"navbar_link"} to={"/"}>
                Yardım
              </NavLink>
            </div>
          </div>
          <div className="navbar_main">
            <div className="navbar_profile">
              {isLogged ? (
                <Link to={"/profile/wallet"} className="navbar_profile_link">
                  Hoşgeldin, {userData.fullname} <span>AM</span>
                </Link>
              ) : (
                <>
                  <button className={"navbar_login_link"}>
                    <span>Giriş Yap</span>{" "}
                    <FontAwesomeIcon icon={faRightToBracket} />
                  </button>
                  <button className={"navbar_register_link"}>
                    <span>Kayıt Ol</span> <FontAwesomeIcon icon={faUser} />
                  </button>
                </>
              )}

              <button className="navbar_responsive" onClick={SidebarToggle}>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>
      </CustomContainer>
    </nav>
  );
};

export default Navbar;
