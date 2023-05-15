import CustomContainer from '../CustomContainer/CustomContainer';
import './Footer.scss';

const Footer = () => (
    <div className="footer">
        <CustomContainer>
            <div className="footer_content">
                <div className="footer_logo">
                    <h2>LOGO</h2>
                </div>
                <div className="footer_desc">
                    <p>Otomatik Ödeme Sistemleri</p>
                </div>
                <div className="footer_copy">
                    <h5>Copyright 2023...</h5>
                </div>
            </div>
        </CustomContainer>
    </div>
)

export default Footer;