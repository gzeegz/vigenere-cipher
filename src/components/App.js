import React, { Component } from 'react';
import { encodeLetter } from '../helper';
import Configuration from './Configuration';
import Encoding from './Encoding';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cipherText: '',
      counter: 0,
      keyword: 'SECRET',
      sourceText: '',
    };
  }

  handleKeywordUpdate = input => {
    this.setState({
      cipherText: '',
      counter: 0,
      keyword: input.toUpperCase(),
      sourceText: '',
    });
  }

  handleSourceTextClear = () => {
    this.setState({
      cipherText: '',
      counter: 0,
      sourceText: '',
    });
  }

  handleSourceLetterClick = letter => {
    this.setState((prevState, props) => {
      const { cipherText, counter, keyword, sourceText } = prevState;
      return {
        cipherText: cipherText + encodeLetter(letter, counter, keyword),
        counter: (counter + 1) % keyword.length,
        sourceText: sourceText + letter,
      };
    });
  }

  render() {
    const { cipherText, counter, keyword, sourceText } = this.state;

    return (
      <div className="vig-container">
        <Configuration
          counter={counter}
          keyword={keyword}
          onSubmit={this.handleKeywordUpdate}
        />

        <Encoding
          cipherText={cipherText}
          counter={counter}
          keyword={keyword}
          sourceText={sourceText}
          onClearClick={this.handleSourceTextClear}
          onLetterClick={this.handleSourceLetterClick}
        />
      </div>
    );
  }
}

export default App;
