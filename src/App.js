import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartPage, Home, ProductDetail } from './Pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/CartPage" component={ CartPage } />
          <Route path="/details/:id" component={ ProductDetail } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
