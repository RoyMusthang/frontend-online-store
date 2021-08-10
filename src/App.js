import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
// import * as api from './services/api';
import './App.css';
import ProductDetail from './Pages/ProductDetail';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/CartPage" component={ CartPage } />
          <Route
            path="/details/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
