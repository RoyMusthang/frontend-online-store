import React, { Component } from 'react';

class CartPage extends Component {
  render() {
    return (
      <div>
        <h1>SHOPPING CART</h1>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

export default CartPage;
