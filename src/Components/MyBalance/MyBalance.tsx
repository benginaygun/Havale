import React from "react";
import "./MyBalance.scss";
import { IMyBalanceProps } from "../../Interfaces/IMyBalanceProps";

const MyBalance:React.FC<IMyBalanceProps> = ({isAll}) => (
  <div className="my_balance">
    <div className="my_balance_quantity">
      <h3>290,00 TL</h3>
    </div>
    <div className="my_balance_desc">
      <p>Toplam Bakiye</p>
    </div>
    {
        isAll ? <div className="my_balance_button">
        <button>Tüm bakiyeyi çek</button>
      </div> : ''
    }
  </div>
);

MyBalance.defaultProps = {
    isAll : false
}

export default MyBalance;
