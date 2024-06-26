import React from 'react';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <span>Sepetiniz ({itemCount})</span>
    </div>
  );
};

export default CartIcon;