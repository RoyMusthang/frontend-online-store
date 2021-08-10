import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import PadraoHome from './pages/PadraoHome';

class App extends React.Component {
  render() {
    console.log(api.getCategories);
    console.log(api.getProductsFromCategoryAndQuery);
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={ PadraoHome } />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
