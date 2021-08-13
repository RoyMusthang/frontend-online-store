import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    let getItem = JSON.parse(localStorage.getItem('productList') || '[]');
    const verify = this.verifyProduct(getItem, product);
    if (verify === product) {
      product.quantity = 1;
      getItem = [...getItem, product];
      localStorage.setItem('productList', JSON.stringify(getItem));
    } else {
      verify.quantity += 1;
      localStorage.setItem('productList', JSON.stringify(getItem));
    }
  }

  verifyProduct = (getItem, product) => {
    const verify = getItem.find((item) => item.id === product.id);
    if (verify) return verify;
    return product;
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
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
            state: product,
          } }
        >
          Detalhes do Produto
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
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
