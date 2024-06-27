import React, { useEffect, useState } from "react";
import { FaTruck, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Feature from "./Feature";
import ApiService from "../services/ApiService";

const CartPage = ({ onCompletePurchase }) => {
  const navigate = useNavigate();
  const [initialCartItems, setInitialCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await ApiService.getBags(); // ApiService üzerinden backend'den verileri al
        setInitialCartItems(response); // Backend'den gelen verileri state'e kaydet
        calculateTotalPrice(response); // Toplam fiyatı hesapla
      } catch (error) {
        console.error("Sepet ürünleri getirilirken hata oluştu:", error);
      }
    };

    fetchCartItems(); // fetchCartItems işlevini bileşen yüklendiğinde çağır
  }, []);

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  };

  const handleCompletePurchase = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <div className="cart-items-section">
        <h2>Sepetiniz</h2>
        <div className="cart-items">
          {initialCartItems.length === 0 ? (
            <div>Sepetiniz boş</div>
          ) : (
            initialCartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.productName}</span>
                <span>{item.price} TL</span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="order-summary-section">
        <h3>Sipariş Özeti</h3>
        <div className="order-summary">
          <div className="summary-item">
            <span>Toplam Fiyat:</span>
            <span>{totalPrice.toFixed(2)} TL</span>
          </div>
          <p className="kargo-text">Kargo sonraki adımda hesaplanacaktır.</p>
          <button
            className="complete-purchase-button"
            onClick={handleCompletePurchase}
          >
            Alışverişi Tamamla
          </button>
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
