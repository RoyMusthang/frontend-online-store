import React, { Component } from 'react';
import CartButtonShopping from '../Components/CartButtonShopping';

class CartPage extends Component {
  render() {
    const { props: { location: { state } } } = this;
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
              <img src={ product.thumbnail } alt={ product.title } />
              <p data-testid="shopping-cart-product-quantity">{productFromDetail.quantity}</p>
              <CartButtonShopping id={ state.id } updateLocal={ this.getLocalstorage } />
            </div>))}
        </div>
      </div>

    );
  }
}

export default CartPage;
