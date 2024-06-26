import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ShoppingCartModal from "./ShoppingCartModal";
import Search from "./Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const openCartModal = () => {
    setCartOpen(true);
  };

  const closeCartModal = () => {
    setCartOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const handleUserIconClick = () => {
    const token = sessionStorage.getItem("token"); // veya localStorage.getItem("token");
  
    if (token) {
      // Kullanıcı giriş yapmış, account sayfasına yönlendir
      navigate("/account");
    } else {
      // Kullanıcı giriş yapmamış, login sayfasına yönlendir
      navigate("/account/login");
    }
  };

  const handleLoginClick = () => {
    navigate("/account/login");
  };

  const handleRegisterClick = () => {
    navigate("/account/register");
  };

  const menuItems = [
    { title: "Anasayfa", href: "/" },
    { title: "Zadelife Blog", href: "/blog" },
    { title: "Zadelife Ürünleri", href: "/zadelife" },
    { title: "Sipariş Sorgulama", href: "/siparis-sorgulama" },
    { title: "Sertifikalarımız", href: "#" },
    { title: "İletişim", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 45);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`header2 ${isFixed ? "fixed" : ""} ${isFixed ? "rotate" : ""}`}
    >
      <div className="user-actions">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div
          className={`menu-overlay ${menuOpen ? "show" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`menu ${menuOpen ? "show" : ""}`}>
            <div className="baslik">
              <FaTimes onClick={toggleMenu} />
              <a onClick={handleLoginClick}>Üye Girişi</a>
              <a>|</a>
              <a onClick={handleRegisterClick}>Üye Ol</a>
              <FaShoppingCart />
            </div>
            <hr />
            {menuItems.map((item, index) => (
              <a key={index} href={item.href}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="logo">
          <img src="./logo.jpg" alt="logo" />
        </div>
      </div>
      <div className="user-text">
        <div className="menu-text">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
      <div className="user-icons">
        <div className="icons">
          <FaSearch style={{ fontSize: "23px" }} onClick={toggleSearch} />
          <FaUser style={{ fontSize: "23px" }} onClick={handleUserIconClick} />
          <FaShoppingCart
            style={{ fontSize: "23px" }}
            onClick={openCartModal}
          />
        </div>
      </div>

      {cartOpen && <ShoppingCartModal onClose={closeCartModal} />}
      {searchOpen && <Search onClose={toggleSearch} />}
    </div>
  );
};

export default Navbar;
