import React from 'react';

class PadraoHome extends React.Component {
  render() {
    return (
      <>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
      </>
    );
  }
}

export default PadraoHome;
