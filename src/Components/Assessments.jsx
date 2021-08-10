import React, { Component } from 'react';

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      textarea: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    // const target = target;
    // const value = value;
    // const name = name;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, textarea } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>

          <label htmlFor="message">
            <textarea
              data-testid="product-detail-evaluation"
              name="textarea"
              type="textarea"
              value={ textarea }
              id="message"
              onChange={ this.handleChange }
            />
          </label>

          <input
            type="submit"
            value="avaliar"
          />
        </form>
      </div>
    );
  }
}

export default Assessment;
