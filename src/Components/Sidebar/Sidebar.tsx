import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  function SidebarToggle() {
    const sidebar: HTMLDivElement = document.querySelector(".sidebar")!;
    if (sidebar.className === 'sidebar sidebar_opened') {
        sidebar.className = 'sidebar sidebar_closed';
    }
    else{
        sidebar.className = 'sidebar sidebar_opened';
    }
  }
  return (
    <nav className="sidebar">
      <div className="sidebar_links">
        <div className="sidebar_links-item">
          <NavLink className={"sidebar_link"} to={"/"}>
          Hakımızda
          </NavLink>
        </div>
        <div className="sidebar_links-item">
          <NavLink className={"sidebar_link"} to={"/"}>
          Güvenlik
          </NavLink>
        </div>
        <div className="sidebar_links-item">
          <NavLink className={"sidebar_link"} to={"/"}>
          Yardım
          </NavLink>
        </div>
      </div>
      <div className="sidebar_close">
        <button onClick={SidebarToggle}>
          <FontAwesomeIcon icon={faXmark} size="sm" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;