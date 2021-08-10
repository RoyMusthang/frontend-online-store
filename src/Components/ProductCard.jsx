import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;

    return (
      <section data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
          } }
        >
          Detalhes do Produto
        </Link>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>
          Preço: R$
          { price }
        </p>
        <Link to="CartPage">Adicionar ao carrinho</Link>
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
