import React from 'react';

class PadraoHome extends React.Component {
  render() {
    return (
      <span data-testid="home-initial-message">
        <h1>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </span>
    );
  }
}

export default PadraoHome;
