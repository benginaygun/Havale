import CustomContainer from "../CustomContainer/CustomContainer";
import "./FinancialControl.scss";
import FinancialControlMain from "./FinancialControlMain/FinancialControlMain";

const FinancialControl = () => (
  <div className="financial_control">
    <CustomContainer>
      <div className="financial_control_content">
        <div className="financial_control_text">
          <div className="financial_control_title">
            <h2>Tüm Finansal Kontrol Sende</h2>
          </div>
          <div className="financial_control_desc">
            <p>Bütün fınansal ihtiyaçların için... sana yeter</p>
          </div>
        </div>
        <FinancialControlMain/>
      </div>
    </CustomContainer>
  </div>
);

export default FinancialControl;
