import "./AddBalance.scss";
import akbank from "../../assets/images/akbank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const AddBalance = () => (
  <div className="add_balance">
    <div className="add_balance_content">
      <div className="add_balance_balance">
        <div className="add_balance_balance_quantity">
          <h3>290,00 TL</h3>
        </div>
        <div className="add_balance_balance_desc">
          <p>Toplam Bakiye</p>
        </div>
      </div>
      <div className="add_balance_form">
        <form>
          <div className="add_balance_form_quantity">
            <label htmlFor="quantity">Miktar</label>
            <input type="number" name="quantity" id="quantity" />
          </div>
          <div className="add_balance_form_bank_choise">
            <label htmlFor="iban">Banka Seçiniz</label>

            <div className="add_balance_form_bank_choise_image">
              <img src={akbank} alt="akbank" />
            </div>
            <div className="add_balance_form_bank_choise_iban">
              <input type="text" name="iban" id="iban" disabled value={'TR4554548874545455445'}/>
              <FontAwesomeIcon className="add_balance_form_bank_choise_iban_copy" icon={faCopy} />
            </div>
            <div className="add_balance_form_button">
                <button>PARA EKLE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default AddBalance;
