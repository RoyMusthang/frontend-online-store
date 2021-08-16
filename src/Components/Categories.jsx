import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <nav>
          {
            categories
              .map(({ name, id }) => (
                <label key={ id } htmlFor={ id }>
                  <input
                    data-testid="category"
                    type="radio"
                    name="categoryId"
                    id={ id }
                    value={ id }
                    onChange={ handleChange }
                  />
                  { name }
                </label>
              ))
          }
        </nav>
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
