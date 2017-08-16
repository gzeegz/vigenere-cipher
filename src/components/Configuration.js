import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateKeyword } from '../helper';

class Configuration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: this.props.keyword,
    };
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value.toUpperCase(),
    });
  }

  handleInputUpdate = e => {
    e.preventDefault();
    const { input } = this.state;
    const validation = validateKeyword(input);
    if (validation.success) {
      this.props.onSubmit(input);
    }
  }

  renderKeywordError() {
    const { input } = this.state;
    const validation = validateKeyword(input);
    
    if (!validation.success) {
      const errors = [];
      for (let type in validation.errors) {
        errors.push(validation.errors[type]);
      }

      return (
        <div style={{ color: 'red' }}>
          <ul>
            {errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  render() {
    const { counter, keyword } = this.props;

    return (
      <div>
        <h1>Configuration</h1>
        <h2>Keyword</h2>

        {this.renderKeywordError()}

        <form onSubmit={this.handleInputUpdate}>
          <input
            value={this.state.input}
            onChange={this.handleInputChange}
          />
          <button>Update</button>
        </form>

        <table>
          <thead>
            <tr>
              {keyword.split('').map((letter, i) =>
                <th
                  key={i}
                  style={{ backgroundColor: counter === i ? 'cyan' : ''} }
                >
                  {letter}
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            <tr>
              {keyword.split('').map((letter, i) =>
                <td
                  key={i}
                  style={{ backgroundColor: counter === i ? 'cyan' : ''} }
                >
                  {letter.charCodeAt(0) - 'A'.charCodeAt(0)}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Configuration.propTypes = {
  counter: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Configuration;
