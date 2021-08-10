import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BarraDePesquisa from './pages/BarraDePesquisa';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ BarraDePesquisa } />
          <Route path="/Carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;