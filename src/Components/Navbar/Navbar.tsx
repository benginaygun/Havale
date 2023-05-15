import { NavLink } from "react-router-dom";
import CustomContainer from "../CustomContainer/CustomContainer";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <nav className="navbar">
      <CustomContainer>
        <div className="navbar_content">
          <div className="navbar_logo">
            <NavLink className={"navbar_logo_link"} to={"/"}>
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
              <NavLink to={"/"} className={"navbar_profile_link"}>
                <span>Giriş Yap</span>{" "}
                <FontAwesomeIcon icon={faRightToBracket} />
              </NavLink>
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
