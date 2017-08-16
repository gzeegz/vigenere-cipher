import React from 'react';
import PropTypes from 'prop-types';
import { encodeLetter } from '../helper';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Encoding = ({
  cipherText,
  counter,
  keyword,
  sourceText,
  onClearClick,
  onLetterClick,
}) => (
  <div>
    <h1>Encoding</h1>
    <h2>Source Text</h2>

    <table>
      <thead>
        <tr>
          {alphabet.map(letter =>
              <th key={letter}>
                <div onClick={() => onLetterClick(letter)}>
                  {letter}
                </div>
              </th>
          )}
        </tr>
      </thead>

      <tbody>
        <tr>
          {keyword.length !== 0 && alphabet.map(letter =>
            <td key={letter}>
              {encodeLetter(letter, counter, keyword)}
            </td>
          )}
        </tr>
      </tbody>
    </table>

    <input value={sourceText} disabled />
    <button onClick={onClearClick}>Clear</button>

    <h2>Cipher Text</h2>
    <input value={cipherText} disabled />
  </div>
);

Encoding.propTypes = {
  cipherText: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
  sourceText: PropTypes.string.isRequired,
  onClearClick: PropTypes.func.isRequired,
  onLetterClick: PropTypes.func.isRequired,
};

export default Encoding;
