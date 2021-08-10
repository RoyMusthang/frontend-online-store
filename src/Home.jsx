import React, { Component } from 'react';
import { Button, Categorias, DetalhesDasCategorias } from './Components';

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
