import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import ApiService from "../services/ApiService"; // ApiService import edildi

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getBags(); // Component ilk yüklendiğinde sepeti getir
  }, []);

  const addBags = async (product, amount) => {
    try {
      await ApiService.addBag(product, amount); // ApiService üzerinden çanta ekleniyor
      getBags(); // İşlem başarıyla tamamlandığında çantayı güncelle
    } catch (error) {
      console.error("Çantaya ürün eklenirken bir hata oluştu:", error);
      // Hata durumunda gerekli işlemler yapılabilir
    }
  };

  const getBags = async () => {
    try {
      const response = await ApiService.getBags();
      setCartItems(response);
    } catch (error) {
      console.error("Ürünler yüklenirken hata oluştu", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        getBags,
        addBags,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
