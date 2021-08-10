import React from 'react';
import { Link } from 'react-router-dom';

class Botao extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          sd
        </Link>
      </div>
    );
  }
}

export default Botao;
