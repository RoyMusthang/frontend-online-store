import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButtonShopping from '../Components/CartButtonShopping';

class ProductDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      click: false,
    }
  }

  componentDidMount(){
    this.getLocalstorage();
  }

  getLocalstorage = () => {
    const { props: { location: { state } } } = this;

    let getItem = JSON.parse(localStorage.getItem('productList') || '[]');
    const thisProduct = getItem.find((item) => item.id === state.id);
    if (thisProduct){
      this.setState({
        click: true,
      })
    } else {
      this.setState({
        click: false,
      })
    }
  }

  addToCart = () => {
    const { props: { location: { state } } } = this;

    let getItem = JSON.parse(localStorage.getItem('productList') || '[]');
    const verify = this.verifyProduct(getItem, state);
    if (verify === state) {
      verify.quantity = 1
      getItem = [...getItem, verify];
      localStorage.setItem('productList', JSON.stringify(getItem));
    } else {
      verify.quantity += 1;
      localStorage.setItem('productList', JSON.stringify(getItem));
    }
    this.getLocalstorage();
  }

  verifyProduct = (getItem, product) => {
    const verify = getItem.find((item) => item.id === product.id);
    if (verify) return verify;
    return product;
  }

  render() {
    const { click } = this.state;
    const { props: { location: { state } } } = this;
    const { title, thumbnail, price, atributtes } = state;
    return (
      <div>
        Detalhes do Produto
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p>{ atributtes }</p>
        <Link data-testid="shopping-cart-button" to="/CartPage">
          <button type="button">Retorne ao carrinho de compras</button>
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          type="button"
        >
          Adicionar ao carrinho
        </button>
        { click && <CartButtonShopping id={ state.id } updateLocal={ this.getLocalstorage } />}
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.string,
      atributtes: PropTypes.arrayOf(),
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
