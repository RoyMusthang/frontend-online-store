import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <Link to="/Carrinho" data-testid="shopping-cart-button">
        <span>🛒</span>
      </Link>
    );
  }
}

export default Button;
