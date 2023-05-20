import './Withdrawal.scss';

const Withdrawal = () => (
    <div className="withdrawal">
        <div className="withdrawal_content">
            <div className="withdrawal_balance">
                <div className="withdrawal_balance_quantity">
                    <h3>290,00 TL</h3>
                </div>
                <div className="withdrawal_balance_desc">
                    <p>Toplam Bakiye</p>
                </div>
                <div className="withdrawal_balance_button">
                    <button>Tüm bakiyeyi çek</button>
                </div>
            </div>
            <div className="withdrawal_form">
                <form>
                    <div className="withdrawal_form_bank_address">
                        <label htmlFor="bankAddress">Banka Adresi Seçin</label>
                        <select name="bankAddress" id="bankAddress">
                            <option value="">Ziraat Bankası TR5256321459859025</option>
                        </select>
                    </div>
                    <div className="withdrawal_form_quantity">
                        <label htmlFor="quantity">Miktar</label>
                        <input type="number" name="quantity" id="quantity" />
                    </div>
                    <div className="withdrawal_form_transfer_fee">
                        <div className="withdrawal_form_transfer_fee_text">
                            <p>Transfer ücreti</p>
                        </div>
                        <div className="withdrawal_form_transfer_fee_summ">
                            <p>10 TL</p>
                        </div>
                    </div>
                    <div className="withdrawal_form_widthdrawal_sum">
                        <div className="withdrawal_form_widthdrawal_sum_text">
                            <p>Toplam Çekilecek Ücret</p>
                        </div>
                        <div className="withdrawal_form_widthdrawal_sum_summ">
                            <p>500 TL</p>
                        </div>
                    </div>
                    <div className="withdrawal_form_button">
                        <button>PARA ÇEK</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Withdrawal;