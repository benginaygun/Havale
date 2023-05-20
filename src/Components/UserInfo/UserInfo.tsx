import "./UserInfo.scss";

const UserInfo = () => (
  <div className="user_info">
    <div className="user_info_content">
      <div className="user_info_text">
        <div className="user_info_title">
          <h4>Profil Bilgileri</h4>
        </div>
        <div className="user_info_desc">
          <p>
            Hepsibura’daki deneyiminizi en iyi seviyede tuta bilmemiz için
            gereken bilgilerinizi buradan düzenleye bilirsiniz.
          </p>
        </div>
      </div>
      <div className="user_info_form">
        <form>
          <div className="user_info_form_fullname">
            <div className="user_info_form_name">
              <label htmlFor="name">Ad</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="user_info_form_surname">
              <label htmlFor="surname">Soyad</label>
              <input type="text" name="surname" id="surname" />
            </div>
          </div>
          <div className="user_info_form_email">
            <label htmlFor="email">E-Posta</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="user_info_form_phone">
            <label htmlFor="phone">Telefon numarası</label>
            <input type="phone" name="phone" id="phone" />
          </div>
          <div className="user_info_form_birthday">
            <label htmlFor="birthday">Doğum tarihi</label>
            <input type="text" name="birthday" id="birthday" />
          </div>
          <div className="user_info_form_button">
            <button>GÜNCELLE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default UserInfo;
