// CheckoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutButton = ({ totalPrice=0 }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/account/login');
  };

  const handleApplyDiscount = () => {
    // İndirim kodu uygulanacak işlemler buraya yazılacak
  };

  return (
    <div className="checkout-button-container">
      <div className="login-link" onClick={handleLoginClick}>
        Giriş Yap
      </div>
      <div className="summary">
        <span>Özet</span>
        <span>{totalPrice} TL</span>
      </div>
      <div className="discount-section">
        <h3>İndirim Kodu</h3>
        <input className='indirim' type="text" placeholder="Kodunuzu buraya girin" />
        <button className="apply-discount-button" onClick={handleApplyDiscount}>
          Uygula
        </button>
      </div>
    </div>
  );
};

export default CheckoutButton;
