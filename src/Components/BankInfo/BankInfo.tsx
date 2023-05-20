import "./BankInfo.scss";

const BankInfo = () => (
  <div className="bank_info">
    <div className="bank_info_content">
      <div className="bank_info_text">
        <div className="bank_info_title">
          <h4>Banka Bilgilerim</h4>
        </div>
        <div className="bank_info_desc">
          <p>
          Lütfen kendinize ait banka bilgilerini giriniz.
          </p>
        </div>
      </div>
      <div className="bank_info_form">
        <form>
          <div className="bank_info_form_password">
            <label htmlFor="bank">Banka İsmi</label>
            <input type="text" name="bank" id="bank" />
          </div>
          <div className="bank_info_form_password">
            <label htmlFor="iban">IBAN</label>
            <input type="text" name="iban" id="iban" />
          </div>
          <div className="bank_info_form_button">
            <button>GÜNCELLE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default BankInfo;
