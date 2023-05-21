import "./MoneyTransferSite.scss";
import xbet from "../../../assets/images/1xbet.png";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MoneyTransferSite = () => {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<FontAwesomeIcon icon={faAngleRight} />,
    prevArrow:<FontAwesomeIcon icon={faAngleLeft} />
  };
  return (
    <div className="money_transfer_site">
      <div className="money_transfer_site_content">
        <div className="money_transfer_site_slider">
          <Slider {...settings}>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
            <div className="money_transfer_site_slider-item">
              <img src={xbet} alt="1xbet" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferSite;
