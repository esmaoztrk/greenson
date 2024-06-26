import React, { useState, useEffect } from "react";
import { FaTimes, FaSearch, FaTrash } from "react-icons/fa";
import ProductList from "./Productlist";
import ApiService from "../services/ApiService";

const Search = ({ onClose }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Sayfa yüklendiğinde tüm ürünleri yükle
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await ApiService.getAllProducts();
        setProducts(response);
        setFilteredProducts(response); // Tüm ürünleri başlangıçta göster
      } catch (error) {
        console.error("Ürünler yüklenirken hata oluştu", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Arama sorgusu değiştiğinde ürünleri filtrele
  useEffect(() => {
    const filterProducts = () => {
      if (searchQuery.trim() === "") {
        setFilteredProducts(products); // Arama kutusu boşsa tüm ürünleri göster
      } else {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [searchQuery, products]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="search-overlay">
      <div className="search-menu">
        <div className="search-header">
          <img src="./logo.jpg" alt="Logo" className="logosearch" />
          <div className="search-input">
            <div className="search-input-container">
              <FaSearch
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <input
                type="text"
                placeholder="Arama yapın..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {searchQuery && (
                <FaTrash
                  style={{
                    fontSize: "20px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={handleClearSearch}
                />
              )}
            </div>
          </div>
        </div>
        {loading && <p>Yükleniyor...</p>}

        <div className="Favorites">
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p>Ürün yok.</p>
          )}
        </div>
        <FaTimes onClick={onClose} className="close-icon" />
      </div>
    </div>
  );
};

export default Search;
