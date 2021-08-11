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
  }

  somTotalPrice(price) {
    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice + price,
    }));
  }

  subtractTotalPrice(price, quantity) {
    if (quantity === 1) return;

    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice - price,
    }));
  }

  removeItem(item) {
    const { id } = item;
    this.state((prev) => {
      const { cartList } = prev;
      const filtro = cartList.filter((cartItem) => cartItem.id !== id);
      return { cartList: filtro };
      });
    };
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
          <button type="submit" data-testid="product-increase-quantity" onClick>
            +
          </button>
        </span>
        <span>
          <button type="submit" data-testid="product-decrease-quantity">
            -
          </button>
        </span>
        <span>
          <button type="reset">
            x
          </button>
        </span>
      </div>
    );
  }
}

export default CartButtonShopping;
