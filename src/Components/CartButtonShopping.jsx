import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CartButtonShopping extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      totalPrice: 0,
      quntidadeEachItem: {},
      id: props.id,
    };
    this.somTotalPrice = this.somTotalPrice.bind(this);
    this.subtractTotalPrice = this.subtractTotalPrice.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.sumQuantity = this.sumQuantity.bind(this);
    this.subQuantity = this.subQuantity.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  getLocalStorage() {
    const { id } = this.state;
    const storageCart = JSON.parse(localStorage.getItem('productList'));
    const thisProduct = storageCart.find((item) => item.id === id);
    
    if(btn === 'sum') {
      thisProduct.quantity += 1;
      thisProduct.totalPrice = thisProduct.price * thisProduct.quantity;
      localStorage.setItem('productList', JSON.stringify('productList'));
    }
    if(btn === 'sub') {
      thisProduct.quantity -= 1;
      thisProduct.totalPrice = thisProduct.price * thisProduct.quantity;
      localStorage.setItem('productList', JSON.stringify('productList'));
    }
  }

  somTotalPrice() {
    const { price } = this.props;
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

  subtractTotalPrice(quantity) {
    const { price } = this.props;
    if (quantity === 1) return; // se a quantidade for menor que 1 é undefined

    this.setState(({ totalPrice }) => ({
      totalPrice: totalPrice - price,
    }));
    console.log('-')
  }

  // subQuantity() {
  //   this.setState({
  //     quantity: this.state.quantity - 1,
  //   });
  // }

  subQuantity(){
    if(this.state.quantity === 0){
      this.setState({
          quantity:0
      });
    }else {
      this.setState(prevState => ({
          quantity: prevState.quantity - 1
      }));
    }
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
    const { quantity } = this.state;
    const { price } = this.props;
    return (
      <div>
        <p>{quantity}</p>
        <p>{price * quantity}</p>
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
