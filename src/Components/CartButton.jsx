import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link
          to="/CartPage"
          alt="cart-page"
          data-testid="shopping-cart-button"
        >
          Shopping Cart
        </Link>
      </div>
    );
  }
}

export default CartButton;
