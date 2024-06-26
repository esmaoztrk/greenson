import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { FaCheck } from "react-icons/fa";

const AddToCartButton = ({ product, onCartOpen }) => {
  const { addBags } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addBags(product, 1);
    setAdded(true);
    if (onCartOpen != null) onCartOpen();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button className="btn btn-primary" onClick={handleAddToCart}>
      {added ? (
        <>
          <FaCheck /> Eklendi
        </>
      ) : (
        "SEPETE EKLE"
      )}
    </button>
  );
};

export default AddToCartButton;
