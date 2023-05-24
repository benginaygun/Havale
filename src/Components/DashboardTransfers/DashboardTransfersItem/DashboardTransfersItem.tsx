import "./DashboardTransfersItem.scss";
import invest from "../../../assets/images/yatirim-icon.png";
import withdrawal from "../../../assets/images/cekim-icon.png";
import React from "react";
import { IDashboardTransfersItemProps } from "../../../Interfaces/IDashboardTransfersItemProps";

const DashboardTransfersItem: React.FC<IDashboardTransfersItemProps> = ({
  title,
  desc,
  date,
  clock,
  quantity,
  state,
  isInvenst,
}) => (
  <div className="dashboard_transfers_main-item">
    <div className="dashboard_transfers_main-item_icon">
      <img src={isInvenst ? invest : withdrawal} alt="transfer icon" />
    </div>
    <div className="dashboard_transfers_main-item_info">
      <div className="dashboard_transfers_main-item_text">
        <div className="dashboard_transfers_main-item_title">
          <p>{title}</p>
        </div>
        <div className="dashboard_transfers_main-item_desc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="dashboard_transfers_main-item_date">
        <div className="dashboard_transfers_main-item_datetime">
          <p>{date}</p>
        </div>
        <div className="dashboard_transfers_main-item_clock">
          <p>{clock}</p>
        </div>
      </div>
      <div className="dashboard_transfers_main-item_quantity">
        <p>{isInvenst ? "+" + quantity + "TL" : "-" + quantity + "TL"}</p>
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
);

export default DashboardTransfersItem;
