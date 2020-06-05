import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem: { gallery, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={gallery[0]} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </div>
  </div>
);

export default CartItem;
