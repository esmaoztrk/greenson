import React, { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import LeftMenu from "./LeftMenu";

const UserPage = () => {
  const [user, setUser] = useState(null); // Başlangıç değeri null olarak ayarlandı
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  let userId = null;

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId; // Token içindeki userId bilgisini al
    } else {
      console.error("Token not found");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await ApiService.getUser(userId);
        console.log(response);
        setUser(response); // Kullanıcı bilgilerini state'e kaydet
        setName(response.name);
        setSurname(response.surname);
      } catch (error) {
        console.error("Kullanıcı bilgileri getirilirken hata oluştu:", error);
      }
    };

    if (userId) {
      fetchUserData(); // Fetch işlemini sayfa yüklendiğinde gerçekleştir
    }
  }, [token]); // token bağımlılığı ekleyin

  const handleSave = async () => {
    try {
      await ApiService.updateUser(userId, { name, surname });
      setUser({ ...user, name, surname });
    } catch (error) {
      console.error("Kullanıcı bilgileri güncellenirken hata oluştu:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Veriler yüklenene kadar yükleme ekranı göster
  }

  return (
    <div className="UserPage">
      {/* Sol Menü */}

      <div className="left-menu">
        <LeftMenu />
      </div>
      {/* Kullanıcı Bilgileri */}
      <div className="user-info ">
        <h2 className="text-2xl mb-4">Kişisel Bilgilerim</h2>
        <div className="mb-4">
          <label className="block mb-1">Adı</label>
          <input
            type="text"
            className="  py-2 px-3 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Soyadı</label>
          <input
            type="text"
            className="  py-2 px-3 w-full"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className=" py-2 px-3 w-full "
            value={user.email}
            readOnly
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
};

export default UserPage;
