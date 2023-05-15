import { HomeFeaturesData } from "../../Data/HomeFeaturesData";
import CustomContainer from "../CustomContainer/CustomContainer";
import HomeFeatuesItem from "./HomeFeatuesItem/HomeFeatuesItem";
import "./HomeFeatures.scss";

const HomeFeatures = () => (
  <div className="home_features">
    <CustomContainer>
      <div className="home_features_content">
        <div className="home_features_text">
          <p>Neden biz</p>
        </div>
        <div className="home_features_items">
          {HomeFeaturesData.map((data, index) => (
            <HomeFeatuesItem key={index} {...data} />
          ))}
        </div>
      </div>
    </CustomContainer>
  </div>
);

export default HomeFeatures;
