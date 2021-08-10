import React, { Component } from 'react';
import { BarraDePesquisa } from '.';
import Button from './Button';
import Categorias from './Categorias';
import DetalhesDasCategorias from './DetalhesDasCategorias';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      pesquisado: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      pesquisado: event.target.value,
    });
  }

  render() {
    const { pesquisado } = this.state;
    return (
      <section>
        <input type="text" value={ pesquisado } onChange={ this.handleChange } />
        <Button />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Categorias />
        <DetalhesDasCategorias />
      </section>
    );
  }
}

export default Home;
