import React from 'react';
import { Link } from 'react-router-dom';

class Botao extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <img scr="https://image.flaticon.com/icons/png/512/34/34627.png" />
        </Link>
      </div>
    );
  }
}

export default Botao;
