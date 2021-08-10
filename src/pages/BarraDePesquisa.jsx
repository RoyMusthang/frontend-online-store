import React from 'react';
import Botao from '../Components/Botao';

class BarraDePesquisa extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="home-initial-message" htmlFor="initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input type="text" id="initial-message" />
        </label>
        <Botao />
      </div>
    );
  }
}

export default BarraDePesquisa;
