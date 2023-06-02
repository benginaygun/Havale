import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShieldHalved, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store/store";
import { useEffect, useState } from "react";
import { loginUser } from "../../redux/slices/auth/actionsCreators";
import { getUserInfo } from "../../redux/slices/user/actionCreators";

const Login = () => {
  const isLogged = useSelector(
    (state: RootState) => state.auth.authData.isSucceed
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    // e.preventDefault();
    isLogged ? alert("oldu qaqa!!!") : console.log("olamdi");
    // navigate('/profile')
    // dispatch(getUserInfo())
  };

  useEffect(() => {
    const closeButton: HTMLButtonElement = document.querySelector(
      ".login_form_close_icon"
    )!;
    const register:HTMLDivElement = document.querySelector('.login')!;
    closeButton.addEventListener("click", () => register.style.display = 'none');
  }, []);

  const tryLog = () => {
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="login">
      <div className="login_content">
        <form onSubmit={handleSubmit}>
        <div className="login_form_close">
            <button className="login_form_close_icon" type="button">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="login_form_title">
            <h2>Giriş Yap</h2>
          </div>
          <div className="login_form_email">
            <input
              type="text"
              name="login_username"
              id="login_username"
              className="login_form_email_input"
              placeholder="Kulanıcı adı"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="login_form_input_icon"
            />
          </div>
          <div className="login_form_password">
            <input
              type="password"
              name="login_password"
              id="login_password"
              className="login_form_password_input"
              placeholder="Şifre"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="login_form_input_icon"
            />
          </div>
          <div className="login_form_features">
            <div className="login_form_remember_me">
              <input type="checkbox" name="remember_me" id="remember_me" />
              <label htmlFor="remember_me">Beni Hatırla</label>
            </div>
            <div className="login_form_forget_password">
              <button type="button">Şifremi unuttum</button>
            </div>
          </div>
          <div className="login_form_button">
            <button onMouseEnter={tryLog}>Giriş Yap</button>
          </div>
          <div className="login_form_redirect">
            <Link to={""} className="login_form_redirect_link">
              Hesabın yokmu? <span>KAYIT OL</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
