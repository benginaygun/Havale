import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.scss";
import {
  faCircleCheck,
  faEnvelope,
  faShieldHalved,
  faSignature,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { useEffect, useState } from "react";
import { registerUser } from "../../redux/slices/auth/actionsCreators";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const closeButton: HTMLButtonElement = document.querySelector(
      ".register_form_close_icon"
    )!;
    const register:HTMLDivElement = document.querySelector('.register')!;
    closeButton.addEventListener("click", () => register.style.display = 'none');
  }, []);

  const tryLog = () => {
    dispatch(
      registerUser({ username, fullname, email, password, confirmPassword })
    );
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    // e.preventDefault();
    tryLog();
    // true ? alert("oldu qaqa!!!") : console.log("olamdi");
  };

  return (
    <div className="register">
      <div className="register_content">
        <form onSubmit={handleSubmit}>
          <div className="register_form_close">
            <button className="register_form_close_icon" type="button">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="register_form_title">
            <h2>Kayıt Ol</h2>
          </div>
          <div className="register_form_fullname">
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="register_form_input"
              placeholder="İsim Soyisim"
              onChange={(e) => setFullname(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faSignature}
              className="register_form_input_icon"
            />
          </div>
          <div className="register_form_email">
            <input
              type="text"
              name="email"
              id="email"
              className="register_form_input"
              placeholder="Mail adresiniz"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="register_form_input_icon"
            />
          </div>
          <div className="register_form_username">
            <input
              type="text"
              name="register_username"
              id="register_username"
              className="register_form_input"
              placeholder="Kulanıcı Adı"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="register_form_input_icon"
            />
          </div>
          <div className="register_form_password">
            <input
              type="password"
              name="register_password"
              id="register_password"
              className="register_form_input"
              placeholder="Şifre"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="register_form_input_icon"
            />
          </div>
          <div className="register_form_confirm_password">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="register_form_input"
              placeholder="Şifre Tekrar Giriniz"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="register_form_input_icon"
            />
          </div>
          <div className="register_form_features">
            <div className="register_form_accept_policy">
              <input type="checkbox" name="accept_policy" id="accept_policy" />
              <label htmlFor="accept_policy">
                Şartlarını okudum ve kabul ediyorum
              </label>
            </div>
          </div>
          <div className="register_form_button">
            <button>Giriş Yap</button>
          </div>
          <div className="register_form_redirect">
            <Link to={""} className="register_form_redirect_link">
              Hesabın var mı? <span>GİRİŞ YAP</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
