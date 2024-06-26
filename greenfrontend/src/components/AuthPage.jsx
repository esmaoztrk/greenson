import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductReducer from "../services/ProductReducer";
import ApiService from "../services/ApiService";

const AuthPage = ({ type }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState(null); // Hata mesajı için state
  const [successMessage, setSuccessMessage] = useState(""); // Başarılı mesaj için state

  const [user, dispatchUser] = useReducer(ProductReducer, {
    user: {},
    isLoggedIn: false,
    isError: false,
    isSignedUp: false,
  });

  const performLogin = async (user) => {
    try {
      const response = await ApiService.login(user);
      sessionStorage.setItem("token", response.token);
      dispatchUser({
        type: "LOGIN_SUCCESS",
        payload: response,
      });
      console.log(response);
      navigate("/account"); // Başarılı giriş sonrası yönlendirme
      setSuccessMessage("Başarıyla giriş yapıldı."); // Başarılı giriş mesajı
      setError(null); // Hata mesajını sıfırla
    } catch (error) {
      console.log(error);
      dispatchUser({
        type: "LOGIN_FAILURE",
      });
      setError(error.response.data.message); // Genel hata mesajı
      console.log(error.response.data.message); // API'den gelen özel hata mesajı
    }
  };

  const performSignup = async (user) => {
    try {
      const response = await ApiService.register(user);
      sessionStorage.setItem("token", response.token);
      dispatchUser({
        type: "SIGNUP_SUCCESS",
        payload: response.data,
      });
      console.log(response);
      navigate("/account/login"); // Başarılı kayıt sonrası giriş sayfasına yönlendirme
      setSuccessMessage("Kayıt işlemi başarıyla tamamlandı."); // Başarılı kayıt mesajı
      setError(null); // Hata mesajını sıfırla
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message); // Kayıt sırasında hata mesajı
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const incomingUser = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    if (type === "register") {
      incomingUser.name = e.target.elements.name.value;
      incomingUser.surname = e.target.elements.surname.value;
      performSignup(incomingUser);
    } else {
      performLogin(incomingUser);
    }
  };

  const handleLoginClick = () => {
    navigate("/account/login");
  };

  const handleRegisterClick = () => {
    navigate("/account/register");
  };

  useEffect(() => {
    if (user.isSignedUp) {
      navigate("/account/login");
    }
    if (user.isLoggedIn) {
      navigate("/account");
    }
  }, [user, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-links">
          <a onClick={handleLoginClick}>Üye Girişi</a>
          <a onClick={handleRegisterClick}>Üye Ol</a>
        </div>
        <form onSubmit={handleSubmit}>
          {type === "register" && (
            <div className="form-group">
              <label htmlFor="name">İsim:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="surname">Soyisim:</label>
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            {type === "register" ? "Kayıt Ol" : "Giriş Yap"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </form>
      </div>
      <div className="auth-image">
        <img src="./images/karadut.webp" alt="auth-image" />
      </div>
    </div>
  );
};

export default AuthPage;
