import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Carrinho, Home } from './Components';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/carrinho" component={ Carrinho } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}
export default App;
