import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import ProductReducer from "../services/ProductReducer";
import ProductList from "./Productlist";

const Products = () => {
  const [productState, dispatch] = React.useReducer(ProductReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const [refreshData, setRefreshData] = useState(true);

  useEffect(() => {
    if (refreshData) {
      fetchDataFromBackend();
      setRefreshData(false); // Tek seferlik veri çekme için refreshData'yi false yap
    }
  }, [refreshData]);

  const fetchDataFromBackend = async () => {
    try {
      dispatch({ type: "FETCH_INIT" });
      const products = await ApiService.getAllProducts();
      dispatch({ type: "FETCH_SUCCESS", payload: products });
    } catch (error) {
      console.error("Error fetching data:", error);
      dispatch({ type: "FETCH_FAILURE" });
    }
  };
  return (
    <div className="Products">

      {productState.isLoading ? (
        <p>
          <strong>Ürünler Yükleniyor...</strong>
        </p>
      ) : productState.isError ? (
        <p>
          <strong>Bir hata oluştu! Ürünler yüklenemedi.</strong>
        </p>
      ) : productState.isSuccess && productState.data.length > 0 ? (
        <ProductList products={productState.data} />
      ) : (
        <p>
          <strong>Ürün bulunamadı.</strong>
        </p>
      )}
    </div>
  );
};

export default Products;
