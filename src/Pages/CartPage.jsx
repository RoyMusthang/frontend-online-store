import React, { Component } from 'react';
import CartButtonShopping from '../Components/CartButtonShopping';

class CartPage extends Component {
  constructor() {
    super();

    this.state = {
      empty: true,
      listStorage: [],
    };
  }

  componentDidMount() {
    this.getLocalstorage();
  }

  getLocalstorage = () => {
    const getItem = JSON.parse(localStorage.getItem('productList') || '[]');
    if (getItem.length > 0) {
      this.setState({
        empty: false,
        listStorage: getItem,
      });
    } else {
      this.setState({
        empty: true,
        listStorage: getItem,
      });
    }
  }

  render() {
    const { listStorage, empty } = this.state;

    const cardProduct = listStorage.map((product) => (
      <div
        key={ product.title }
        data-testid="shopping-cart-button"
      >
        <h1 data-testid="shopping-cart-product-name">{ product.title }</h1>
        <p>{ product.price }</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
        <CartButtonShopping id={ product.id } updateLocal={ this.getLocalstorage } />
      </div>));

    const dereguejhonson = (
      <h3 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h3>
    );

    return (
      <div>
        <h1>SHOPPING CART</h1>
        { !empty ? cardProduct : dereguejhonson }
      </div>
    );
  }
}

export default CartPage;
