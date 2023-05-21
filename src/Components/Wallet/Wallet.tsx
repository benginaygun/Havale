import { Link } from "react-router-dom";
import "./Wallet.scss";
import transferIcon from "../../assets/images/transfer-icon.png";
import walletIcon from "../../assets/images/wallet-icon.png";
import TransferList from "../TransferList/TransferList";

const Wallet = () => (
  <div className="wallet">
    <div className="wallet_content">
      <div className="wallet_balance">
        <div className="wallet_balance_title">
          <h4>Cüzdan</h4>
        </div>
        <div className="wallet_main">
          <div className="wallet_main_balance">
            <h2>0<span>TL</span></h2>
          </div>
          <div className="wallet_main_links">
            <div className="wallet_main_links-item">
              <Link to={"/"} className="wallet_main_link">
                <div className="wallet_main_link-image">
                  <img src={walletIcon} alt="para yukle" />
                </div>
                <div className="wallet_main_link-text">
                  <p>YÜKLE</p>
                </div>
              </Link>
            </div>
            <div className="wallet_main_links-item">
              <Link to={"/"} className="wallet_main_link">
              <div className="wallet_main_link-image">
                  <img src={transferIcon} alt="para yukle" />
                </div>
                <div className="wallet_main_link-text">
                  <p>GÖNDER</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TransferList/>
    </div>
  </div>
);

export default Wallet;
