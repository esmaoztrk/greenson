import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ pageToReturn }) => {
  const location = useLocation();
  const token = sessionStorage.getItem("token");

  if (!token) {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    return <Navigate to="/login" replace />;
  }

  // JWT'den kullanıcı bilgilerini çözümle
  const decodedJWT = jwtDecode(token);

  // Örnek olarak, JWT içinde role alanı varsa burada kontrol edebiliriz
  // Kullanıcının rolü "user" ise veya belirli bir kullanıcı kimliği ile eşleşiyorsa
  // pageToReturn'e yönlendirilir
  if (decodedJWT.role === "user") {
    return pageToReturn;
  }

  // Diğer durumlarda yetkisiz sayfa hatası ver
  return <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
