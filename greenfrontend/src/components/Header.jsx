import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Promo from './Promo';

function Header() {
  const [showShippingText, setShowShippingText] = useState(true);
  const [showPromoText, setShowPromoText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowShippingText(prevState => !prevState);
      setShowPromoText(prevState => !prevState);
    }, 3000);

    // Temizlik yap
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
        <div className="shipping-promo" id="shipping-promo">
          {showShippingText && <div id="shipping-text">250 TL ÜZERİ ÜCRETSİZ KARGO</div>}
          {showPromoText && <div id="promo-text">YENİLENEN WEB SİTEMİZE ÖZEL KAMPANYALAR!</div>}
        </div>

        <div className="stickey-header">
         <Navbar/>
        </div>
    </header>
  );
}

export default Header;