import React, { useContext, useState } from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
const ShoppingCartModal = ({ onClose }) => {
  const { cartItems, getBags, addBags } = useContext(CartContext);
  const navigate = useNavigate(); // Değişiklik burada
  const handleGoToCart = () => {
    const token = sessionStorage.getItem("token"); // veya localStorage.getItem("token");
  
    if (token) {
      // Kullanıcı giriş yapmış, account sayfasına yönlendir
      navigate("/cart");
    } else {
      // Kullanıcı giriş yapmamış, login sayfasına yönlendir
      navigate("/account/login");
    }
    
    onClose(); // Modalı kapat
  };
  getBags();

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Sepetiniz</h2>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <hr className="modal-divider" />
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            Sepetinizde ürün bulunmamaktadır.
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.productName}</p>
                <p>₺{item.price}</p>
              </div>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => addBags(item, -1)}
                >
                  -
                </button>
                <span className="quantity">{item.amount}</span>
                <button
                  className="quantity-button"
                  onClick={() => addBags(item, 1)}
                >
                  +
                </button>
                <button
                  className="remove-button"
                  onClick={() => addBags(item, -1 * item.amount)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="cart-total">
            Toplam: ₺
            {cartItems.reduce(
              (total, item) => total + item.price * item.amount,
              0
            )}
          </div>
        </>
      )}
      <button className="go-to-cart-button" onClick={handleGoToCart}>
        Sepete git
      </button>
    </div>
  );
};

export default ShoppingCartModal;
