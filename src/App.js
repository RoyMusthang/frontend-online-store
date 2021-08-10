import React from 'react';
import './App.css';
import * as api from './services/api';

class App extends React.Component {
  render() {
    console.log(api.getCategories);
    console.log(api.getProductsFromCategoryAndQuery);
    return (
      <div>
        <h1>Teste</h1>
      </div>
    );
  }
}

export default App;
