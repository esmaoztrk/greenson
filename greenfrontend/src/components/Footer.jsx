import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src="./logo.jpg" alt="Logo" />
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h2>Menü</h2>
            <ul>
              <li>
                <a href="/">Anasayfa</a>
              </li>
              <li>
                <a href="/blog">Zadelife Blog</a>
              </li>
              <li>
                <a href="/zadelife">Zadelife Ürünleri</a>
              </li>
              <li>
                <a href="/siparis-sorgulama">Sipariş Takip</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Hesabım</h2>
            <ul>
              <li>
                <a href="/account/login">Giriş Yap</a>
              </li>
              <li>
                <a href="/account/register">Kayıt Ol</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Hakkımızda</h2>
            <ul>
              <li>
                <a href="/contact">İletişim</a>
              </li>
              <li>
                <a href="#">S.S.S</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Sözleşmeler</h2>
            <ul>
              <li>
                <a href="#">Çerez Politikası</a>
              </li>
              <li>
                <a href="#">Üyelik Sözleşmesi</a>
              </li>
              <li>
                <a href="#">Satış Sözleşmesi</a>
              </li>
              <li>
                <a href="#">İptal ve İade Politikası</a>
              </li>
              <li>
                <a href="#">Gizlilik Sözleşmesi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-kendi">
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
          <div className="cart-icons">
            <img src="./images/Americanexpress.jpg" alt="" />
            <img src="./images/Maestro.jpg" alt="" />
            <img src="./images/mastercard.jpg" alt="" />
            <img src="./images/visa.jpg" alt="" />
            <img src="./images/troy.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Zadelife ©2024 Tüm Hakları Saklıdır</p>
      </div>
    </footer>
  );
};

export default Footer;
