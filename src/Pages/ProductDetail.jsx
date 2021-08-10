import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: '',
        thumbnail: '',
        price: '',
        atributtes: [],
      },
    };
    this.fetchDataFromProduct = this.fetchDataFromProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchDataFromProduct();
  }

  async fetchDataFromProduct() {
    const { location: { data }, match: { params: { id } } } = this.props;
    const productDetails = await api.getProductsFromCategoryAndQuery('', data);
    const productResult = productDetails.results.find((value) => value.id === id);
    console.log(productResult);
    this.setState({
      product: {
        title: productResult.title,
        thumbnail: productResult.thumbnail,
        price: productResult.price,
        atributtes: productResult.atributtes,
      },
    });
  }

  addToCart() {
    const { product } = this.state;
    let getItem = JSON.parse(localStorage.getItem('productList'));
    getItem = [...getItem, product];
    localStorage.setItem('productList', JSON.stringify(getItem));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, atributtes } = product;
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
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
