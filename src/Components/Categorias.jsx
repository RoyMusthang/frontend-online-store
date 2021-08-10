import React, { Component } from 'react';
import * as api from '../services/api';

class Categorias extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const listOfCategories = await api.getCategories();
    this.setState({
      categories: listOfCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        { categories.map((element) => (
          <li data-testid="category" key={ element.id }>{ element.name }</li>))}
      </ul>
    );
  }
}

export default Categorias;
