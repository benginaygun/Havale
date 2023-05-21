import MyBalance from '../MyBalance/MyBalance';
import './MoneyTransfer.scss';
import MoneyTransferSite from './MoneyTransferSite/MoneyTransferSite';

const MoneyTransfer = () => (
    <div className="money_transfer">
        <div className="money_transfer_content">
            <MyBalance isAll/>
            <MoneyTransferSite/>
            <div className="money_transfer_form">
                <form>
                    <div className="money_transfer_form_quantity">
                        <label htmlFor="quantity">Miktar</label>
                        <input type="text" name="quantity" id="quantity" />
                    </div>
                    <div className="money_transfer_form_email">
                        <label htmlFor="email">E-Posta Adresinizi Giriniz</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="money_transfer_form_transfer_fee">
                        <div className="money_transfer_form_transfer_fee_text">
                            <p>Transfer ücreti</p>
                        </div>
                        <div className="money_transfer_form_transfer_fee_summ">
                            <p>10 TL</p>
                        </div>
                    </div>
                    <div className="money_transfer_form_widthdrawal_sum">
                        <div className="money_transfer_form_widthdrawal_sum_text">
                            <p>Toplam Çekilecek Ücret</p>
                        </div>
                        <div className="money_transfer_form_widthdrawal_sum_summ">
                            <p>500 TL</p>
                        </div>
                    </div>
                    <div className="money_transfer_form_button">
                        <button>PARA ÇEK</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default MoneyTransfer;