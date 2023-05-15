import React from "react";
import "./FinancialControlMainItem.scss";
import { IFinancialControlMainItemProps } from "../../../../Interfaces/IFinancialControlMainItemProps";

const FinancialControlMainItem:React.FC<IFinancialControlMainItemProps> = ({title,desc}) => (
  <div className="financial_control_main-item">
    <div className="financial_control_main-item_title">
      <h4>{title}</h4>
    </div>
    <div className="financial_control_main-item_desc">
      <p>{desc}</p>
    </div>
  </div>
);

export default FinancialControlMainItem;
