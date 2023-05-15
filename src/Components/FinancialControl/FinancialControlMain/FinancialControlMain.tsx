import "./FinancialControlMain.scss";
import phone from '../../../assets/images/phone.png';
import { FinancialControlData } from "../../../Data/FinancialControlData";
import FinancialControlMainItem from "./FinancialControlMainItem/FinancialControlMainItem";

const FinancialControlMain = () => (
  <div className="financial_control_main">
    {
        FinancialControlData.map((data,index) => (
            <FinancialControlMainItem key={index} {...data}/>
        ))
    }
    <div className="financial_control_main_image">
      <img src={phone} alt="phone" />
    </div>
  </div>
);

export default FinancialControlMain;
