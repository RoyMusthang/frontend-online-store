import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard.jsx';

class ProductList extends React.Component {
  render() {
    const { productList } = this.props;
    const noProductFound = <p>Nenhum produto foi encontrado</p>;
    const productListFound = (
      productList.map((product) => <ProductCard key={ product.id } product={ product } />)
    );

    return (
      (productList.length === 0) ? noProductFound : productListFound
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductList;
