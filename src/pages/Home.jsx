import React from 'react';
import BarraDePesquisa from './BarraDePesquisa';
import Categorias from './Categorias';

class Home extends React.Component {
  render() {
    return (
      <>
        <BarraDePesquisa />
        <Categorias />
      </>
    );
  }
}

export default Home;
