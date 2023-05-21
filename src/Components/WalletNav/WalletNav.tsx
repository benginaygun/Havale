import { NavLink } from "react-router-dom";
import "./WalletNav.scss";

const WalletNav = () => (
  <nav className="wallet_nav">
    <div className="wallet_nav_links">
      <div className="wallet_nav_links-item">
        <NavLink
          to={"/profile/moneytransfer/withdrawal"}
          className="wallet_nav_link"
        >
          Para Çek
        </NavLink>
      </div>
      <div className="wallet_nav_links-item">
        <NavLink
          to={"/profile/moneytransfer/addbalance"}
          className="wallet_nav_link"
        >
          Para Ekle
        </NavLink>
      </div>
      <div className="wallet_nav_links-item">
        <NavLink
          to={"/profile/moneytransfer/transfer"}
          className="wallet_nav_link"
        >
          Para Transferi
        </NavLink>
      </div>
    </div>
  </nav>
);

export default WalletNav;
