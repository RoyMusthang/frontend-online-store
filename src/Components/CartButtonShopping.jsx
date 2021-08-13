import React, { Component } from 'react';

class CartButtonShopping extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.getLocalstorage = this.getLocalstorage.bind(this);
  }

  componentDidMount() {
    this.getLocalstorage('start');
  }

  getLocalstorage = (input) => {
    const { id, updateLocal } = this.props;
    const getItem = JSON.parse(localStorage.getItem('productList'));
    const xablau = getItem.find((item) => item.id === id);

    if (input === 'start' && xablau) {
      this.setState({
        quantity: xablau.quantity,
      });
    }
    if (input === 'sub') {
      xablau.quantity -= 1;
      xablau.price *= xablau.quantity;
      localStorage.setItem('productList', JSON.stringify(getItem));
      updateLocal();
    }
    if (input === 'add') {
      xablau.quantity += 1;
      xablau.price *= xablau.quantity;
      localStorage.setItem('productList', JSON.stringify(getItem));
      updateLocal();
    }
    if (input === 'tramontina') {
      const resil = getItem.filter((item) => item.id !== id);
      localStorage.setItem('productList', JSON.stringify(resil));
      updateLocal();
    }
  }

  handleAdd = () => {
    const { quantity } = this.state;
    const newQuantity = quantity + 1;
    this.setState({
      quantity: newQuantity,
    });
    this.getLocalstorage('add');
  }

  handleSub = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      this.setState({
        quantity: newQuantity,
      });
      this.getLocalstorage('sub');
    } else {
      this.getLocalstorage('tramontina');
    }
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleAdd }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleSub }
        >
          -
        </button>
        <button
          type="button"
          className="shopping-cart-button"
          onClick={ () => this.getLocalstorage('tramontina') }
        >
          x
        </button>
      </div>
    );
  }
}

export default CartButtonShopping;
