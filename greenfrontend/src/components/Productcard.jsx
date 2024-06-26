import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "./StarRating";
import AddToCartButton from "./AddToCartButton";
import { FaHeart } from "react-icons/fa";
import ApiService from "../services/ApiService";

const ProductCard = ({ product, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    const initializeUserData = async () => {
      const id = await getUserIdFromToken();
      if (id) {
        setUserId(id);
        await checkFavoriteStatus(id);
      }
    };
    initializeUserData();
  }, []);

  const getUserIdFromToken = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.userId;
      } catch (error) {
        console.error("Token decode edilirken bir hata oluştu:", error);
        throw error;
      }
    } else {
      console.error("Token bulunamadı.");
      return null;
    }
  };

  const checkFavoriteStatus = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token && id) {
      try {
        const favoriteProducts = await ApiService.getFavorites(id, token);
        setIsFavorite(
          favoriteProducts.some((favProduct) => favProduct._id === product._id)
        );
      } catch (error) {
        console.error("Favori ürünler alınırken bir hata oluştu:", error);
      }
    }
  };

  const handleFavoriteClick = async () => {
    const token = sessionStorage.getItem("token");
    if (!token || !userId) {
      console.log("Kullanıcı oturumu açmamış veya token bulunamadı");
      navigate("/account/login"); 
      return;
    }

    try {
      if (isFavorite) {
        await ApiService.removeFavorite(userId, product._id, token);
        console.log("Favori ürün backend'den kaldırıldı:", product._id);
      } else {
        await ApiService.addFavorite(userId, product._id, token);
        console.log("Favori ürün backend'e eklendi:", product._id);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Favori ürünler işlenirken bir hata oluştu:", error);
    }
  };

  const calculateDiscountPercent = (regularPrice, price) => {
    if (regularPrice <= 0 || price <= 0) {
      return 0;
    }

    const discountAmount = regularPrice - price;
    const discountPercent = (discountAmount / regularPrice) * 100;

    return Math.round(discountPercent);
  };

  const discountPercent = calculateDiscountPercent(
    product.regularPrice,
    product.price
  );

  const handleAddToCart = () => {
    console.log(`Ürün eklendi: ${product.name}`);
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className="product-card">
      <div className="product-list-item-img">
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      </div>
      <Card.Body>
        <FaHeart
          onClick={handleFavoriteClick}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: isFavorite ? "red" : "grey",
            cursor: "pointer",
            fontSize: "24px",
          }}
        />
        <div className="product-list-item-info">
          <div style={{ textAlign: "center" }}>
            <AddToCartButton product={product} onAddToCart={handleAddToCart} />
          </div>
          <Card.Title className="brand-name">{product.brand}</Card.Title>
          <Card.Text className="product-name">{product.name}</Card.Text>
          <Card.Text className="product-ratings">
            <div style={{ fontSize: "20px" }}>
              <StarRating rating={product.rating} />
            </div>
            <span style={{ fontSize: "12px" }}>
              {product.ratings} Değerlendirme
            </span>
          </Card.Text>
          <div className="price-main">
            <div className="discount-percent">%{discountPercent}</div>
            <Card.Text className="discount-price">
              <span
                style={{
                  fontSize: "16px",
                  textDecoration: "line-through",
                  color: "gray",
                }}
              >
                ₺{product.regularPrice}
              </span>
              <span style={{ fontSize: "18px", fontWeight: 900 }}>
                ₺{product.price}
              </span>
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
