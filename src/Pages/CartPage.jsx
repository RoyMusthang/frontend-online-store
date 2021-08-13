import React, { Component } from 'react';

class CartPage extends Component {
  render() {
    const productFromDetail = JSON.parse(localStorage.getItem('productList'));
    return (
      <div>
        <div>
          <h1>SHOPPING CART</h1>
          <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
        </div>
        <div>
          {productFromDetail.map((product) => (
            <div
              key={ product.title }
              data-testid="shopping-cart-button"
            >
              <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
              <p>{ product.price }</p>
              <img src={ product.thumbnail } alt="foto do produto" />
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>))}
        </div>
      </div>

    );
  }
}

export default CartPage;
