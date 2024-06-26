import React from 'react';
import { FaLock, FaTruck, FaMoneyBillAlt } from 'react-icons/fa'; // CSS dosyasını dahil ediyoruz


const Feature = () => {
  return (
    <div className="icons-container">
      <div className="icon-with-label">
        <FaLock className="icon" />
        <span className="label">256 Bit SSL ile güvende alışveriş</span>
      </div>
      <div className="icon-with-label">
        <FaTruck className="icon" />
        <span className="label">250 TL ve üzeri siparişlerde kargo bedava</span>
      </div>
      <div className="icon-with-label">
        <FaMoneyBillAlt className="icon" />
        <span className="label">15 iş günü içerisinde iade & değişim</span>
      </div>
    </div>
  );
}

export default Feature;