import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartButtonShopping from './CartButtonShopping';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    let getItem = JSON.parse(localStorage.getItem('productList'));
    getItem = [...getItem, product];
    console.log(getItem);
    localStorage.setItem('productList', JSON.stringify(getItem));
  }

  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço: R$
          { price }
        </p>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
          } }
        >
          Detalhes do Produto
        </Link>
        <Link
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
          to="CartPage"
        >
          Adicionar ao carrinho
        </Link>
        <CartButtonShopping value={ price } />
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
