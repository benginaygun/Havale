import './ChangePassword.scss';

const ChangePassword = () => (
    <div className="change_password">
        <div className="change_password_content">
            <div className="change_password_text">
                <div className="change_password_title">
                    <h4>Şifre değişikliği</h4>
                </div>
                <div className="change_password_desc">
                    <p>Şifreniz en az bir harf,rakam veya özel karakter içermeli. Ayrıca şifreniz en az 8 karakterden oluşmalı.</p>
                </div>
            </div>
            <div className="change_password_form">
                <form>
                    <div className="change_password_form_password">
                        <label htmlFor="password">Mevcut şifre</label>
                        <input type="text" name="password" id="password" />
                    </div>
                    <div className="change_password_form_password">
                        <label htmlFor="changePassword">Yeni şifre</label>
                        <input type="text" name="changePassword" id="changePassword" />
                    </div>
                    <div className="change_password_form_button">
                        <button>GÜNCELLE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default ChangePassword;