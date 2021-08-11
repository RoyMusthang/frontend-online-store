import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CartButtonShopping extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // criar função de handler dinâmico
  // target.name dentro do button
  handleButton({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

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
