import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DetalhesDasCategorias extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //   };
  // }

  render() {
    return (
      <div>
        <p>{ title }</p>
        <img alt={ title } src={ thumbnail } />
        <span>{ price }</span>
        <Link to="/shoppingcart" />
      </div>

    );
  }
}

export default DetalhesDasCategorias;
