// Encode a given letter according to an offset specified by a letter in a keyword.
//
// Example: encodeLetter('B', 1 'CD') returns 'E' because the letter 'D' specified
// by the counter 1 has an offset of 3. (Offset is determined by the standard
// position in the alphabet zero-indexed.)
export const encodeLetter = (letter, counter, keyword) => {
  const standardPos = letter.charCodeAt(0) - 'A'.charCodeAt(0);
  const offset = keyword.charCodeAt(counter) - 'A'.charCodeAt(0);
  const encodedPos = (standardPos + offset) % 26;
  
  return String.fromCharCode(encodedPos + 'A'.charCodeAt(0));
};

// Keyword needs to be a single uppercase word between 3 and 8 characters.
export const validateKeyword = input => {
  const errors = {};
  let success = true;

  if (input.length < 3) {
    success = false;
    errors.length = 'Keyword needs to have at least 3 characters.';
  }

  if (input.length > 8) {
    success = false;
    errors.length = 'Keyword cannot be longer than 8 characters.';
  }

  if (!/^[A-Z]+$/.test(input)) {
    success = false;
    errors.characters = 'Keyword can only contain uppercase letters.';
  }

  return {
    success,
    errors: errors
  };
};
