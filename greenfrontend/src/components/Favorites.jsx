import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ApiService from "../services/ApiService";
import ProductList from "./Productlist";
import LeftMenu from "./LeftMenu";

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const favorites = await ApiService.getFavorites(userId, token);
        setFavoriteProducts(favorites);
      } catch (error) {
        console.error("Favori ürünler alınırken bir hata oluştu:", error);
      }
    };

    fetchFavorites();
  }, [navigate]);

  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous location in the history stack
  };


  return (
    <div className="Favorites">
      <div className="left-menu  bg-gray-100">
        <LeftMenu/>
      </div>
      <div className="favorites-page">
        <h1>Favoriler</h1>
        <button onClick={handleGoBack}>Geri Dön</button>
        {favoriteProducts.length > 0 ? (
          <ProductList products={favoriteProducts} />
        ) : (
          <p>Henüz favorilere eklenmiş bir ürün yok.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
