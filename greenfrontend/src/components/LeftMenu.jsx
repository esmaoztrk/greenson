// LeftMenu.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const LeftMenu = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        window.location.href = "/";
      };
    
      const handleFavorites = () => {
        navigate("/account/favorites"); // navigate fonksiyonunu kullanarak favoriler sayfasına yönlendir
      };
    
      const handlePersonalInfo = () => {
        navigate("/account");
      };
    
      const handleAddresses = () => {
        navigate("/account/addresses");
      };
    return (
    
      <div className="menu-items">
        <button onClick={handleLogout} className="block text-left text-gray-800 hover:bg-gray-200 mb-2">
          Çıkış Yap
        </button>
        <button onClick={handlePersonalInfo} className="block text-left text-gray-800 hover:bg-gray-200 mb-2">
          Kişisel Bilgilerim
        </button>
        <button onClick={handleFavorites} className="block text-left w-full py-2 px-4 text-gray-800 hover:bg-gray-200 mb-2">
          Favorilerim
        </button>
        <button onClick={handleAddresses} className="block text-left w-full py-2 px-4 text-gray-800 hover:bg-gray-200 mb-2">
          Adreslerim
        </button>
      </div>
  );
};

export default LeftMenu;
