import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class SearchInput extends Component {
  render() {
    const { pesquisado } = this.props;
    return (
      <section>
        <input type="text" value={ pesquisado } onChange={ this.handleChange } />
        <Button />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

SearchInput.propTypes = {
  pesquisado: PropTypes.string.isRequired,
};

export default SearchInput;
