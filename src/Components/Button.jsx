import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route>
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <span>🛒</span>
          </Link>
        </Route>
      </BrowserRouter>
    );
  }
}

export default Button;
