import "./DashboardTransfersItem.scss";
import invest from "../../../assets/images/yatirim-icon.png";
import withdrawal from "../../../assets/images/cekim-icon.png";
import React from "react";
import { IDashboardTransfersItemProps } from "../../../Interfaces/IDashboardTransfersItemProps";

const DashboardTransfersItem: React.FC<IDashboardTransfersItemProps> = ({
  reciver,
  name,
  date,
  state,
  isInvest,
  sum,
}) => {
 
  let year = date.substring(0,4);
  let month = date.substring(5,7);
  let day = date.substring(8,10);
  let clock = date.substring(11,16);
  
  return(
  <div className="dashboard_transfers_main-item">
    <div className="dashboard_transfers_main-item_icon">
      <img src={isInvest ? invest : withdrawal} alt="transfer icon" />
    </div>
    <div className="dashboard_transfers_main-item_info">
      <div className="dashboard_transfers_main-item_text">
        <div className="dashboard_transfers_main-item_title">
          <p>{reciver}</p>
        </div>
        <div className="dashboard_transfers_main-item_desc">
          <p>{name}</p>
        </div>
      </div>
      <div className="dashboard_transfers_main-item_date">
        <div className="dashboard_transfers_main-item_datetime">
          <p>{`${day}.${month}.${year}`}</p>
        </div>
        <div className="dashboard_transfers_main-item_clock">
          <p>{clock}</p>
        </div>
      </div>
      <div className="dashboard_transfers_main-item_quantity">
        <p>{isInvest ? "+" + sum + "TL" : "-" + sum + "TL"}</p>
      </div>
      <div
        className="dashboard_transfers_main-item_state"
        style={
          state === "Tamamlandı"
            ? { color: "#37E860" }
            : state === "Reddedldi"
            ? { color: "#FF0000" }
            : { color: "#A2A2A2" }
        }
      >
        <p>{state}</p>
      </div>
    </div>
  </div>
)};
export default DashboardTransfersItem;
