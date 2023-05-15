import CustomContainer from "../CustomContainer/CustomContainer";
import "./HomeHeader.scss";
import paraEkle from "../../assets/images/cuzdanına-para-ekle.png";
import miktar from "../../assets/images/yatirilan-miktar.png";
import transfer from "../../assets/images/kolayca-transfer.png";
import arrow from "../../assets/images/ok-isareti.png";

const HomeHeader = () => (
  <div className="home_header">
    <CustomContainer>
      <div className="home_header_test">

      </div>
      <div className="home_header_text">
        <div className="home_header_text_title">
          <h2>Havale işlemlerinizi otomatik hale getirin</h2>
        </div>
        <div className="home_header_text_description">
          <p>
            Şimdihavale olarak, dayanışmanın ve birlikte hareket etmenin gücüne
            inanıyor, iş birliklerine oldukça önem veriyoruz.
          </p>
        </div>
      </div>
        <div className="home_header_info">
          <div className="home_header_info_images">
            <div className="home_header_info_image-add">
              <img src={paraEkle} alt="add money" />
              <div className="home_header_info_image-arrow_first">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="home_header_info_image-balance">
              <img src={miktar} alt="balance" />
              <div className="home_header_info_image-arrow_second">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="home_header_info_image-transfer">
              <img src={transfer} alt="transfer" />
            </div>
          </div>
        </div>
    </CustomContainer>
  </div>
);

export default HomeHeader;
