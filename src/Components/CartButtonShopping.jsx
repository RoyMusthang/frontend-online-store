import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CartButtonShopping extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      totalPrice: 0,
      quntidadeEachItem: {},
    };
    this.somTotalPrice = this.somTotalPrice.bind(this);
    this.subtractTotalPrice = this.subtractTotalPrice.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.sumQuantity = this.sumQuantity.bind(this);
    this.subQuantity = this.subQuantity.bind(this);
  }

  somTotalPrice(price) {
    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice + price,
    }));
    console.log('+')
  }

  sumQuantity() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  subtractTotalPrice(price, quantity) {
    if (quantity === 1) return;

    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice - price,
    }));
    console.log('-')
  }

  subQuantity() {
    this.setState({
      quantity: this.state.quantity - 1,
    });
  }

  removeItem(item) {
    const { id } = item;
    this.state((prev) => {
      const { cartList } = prev;
      const filtro = cartList.filter((cartItem) => cartItem.id !== id);
      return { cartList: filtro };
    });
  }

  // criar função de handler dinâmico
  // target.name dentro do button

  // handleButton({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // handleClick() {
  //   console.log('aumentou');
  // }

  render() {
    // const { increase } = this.state;
    return (
      <div>
        <span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={() => {
              this.somTotalPrice();
              this.sumQuantity();
            }}
          >
            +
          </button>
        </span>
        <span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => {
              this.subtractTotalPrice();
              this.subQuantity();
            }}
          >
            -
          </button>
        </span>
        <span>
          <button
            type="button"
            onClick={ this.removeItem }
          >
            x
          </button>
        </span>
      </div>
    );
  }
}

export default CartButtonShopping;
