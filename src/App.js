import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PadraoHome from './pages/PadraoHome';

class App extends React.Component {
  render() {
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
