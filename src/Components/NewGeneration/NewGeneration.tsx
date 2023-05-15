import CustomContainer from "../CustomContainer/CustomContainer";
import "./NewGeneration.scss";
import binance from '../../assets/images/binance-logo.png';
import uber from '../../assets/images/uber-logo.png';
import biTaksi from '../../assets/images/bi-taksi.png';

const NewGeneration = () => (
  <div className="new_generation">
    <CustomContainer>
      <div className="new_generation_content">
        <div className="new_generation_summary">
          <div className="new_generation_title">
            <h2>Yeni nesil iş modeleri, yeni nesil çözümler</h2>
          </div>
          <div className="new_generation_desc">
            <p>
              Hızlı ve güvenli sistemimizile birlikte sizlere optimal bir hizmet
              kalitesi sunmaktayız. Uygun fiyatlı hizmetlerimiz dahilinde,
              uzmanlığımız olan Papara ve Havale alanında operasyonel
              verimliliği garanti ediyoruz. İş ortaklarımızın uzun dönemde
              ticari büyümesini desteklemeyi Şimdi havale olarak taahhüt
              etmekteyiz.
            </p>
          </div>
        </div>
        <div className="new_generation_images">
          <div className="new_generation_images-item"><img src={binance} alt="binance" /></div>
          <div className="new_generation_images-item"><img src={uber} alt="uber" /></div>
          <div className="new_generation_images-item"><img src={biTaksi} alt="biTaksi" /></div>
        </div>
      </div>
    </CustomContainer>
  </div>
);

export default NewGeneration;
