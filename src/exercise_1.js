
/**
 * Write a function to check if a string is empty
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  if (typeof text !== 'string') {
    throw new Error(
        `Invalid type: Expected 'string', but received '${typeof text}'.`
    );
  }

  if (text === undefined) {
    throw new Error(`Input must be defined.`);
  }

  return text.trim().length === 0;
}

/**
 * Write a function to truncate text
 * @param {String} text
 * @param {Number} numberOfCharacters
 * @returns {String}
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  if (typeof text !== 'string' || text.length === 0) {
    throw new Error("Input 'text' must be a non-empty string.");
  }

  if (typeof numberOfCharacters !== 'number') {
    throw new Error("Input 'numberOfCharacters' must be a number.");
  }
  if (numberOfCharacters === undefined) {
    throw new Error("Please specify number of characters to extract.");
  }

  return text.slice(0, numberOfCharacters);
}


/**
 * Write a function to create social media post hash tag
 * @param {String} text
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
function createHashTag(text) {
  if (typeof text !== 'string' || !text.trim() || text.length < 3) {
    throw new Error("Text should have at least three characters");
  }
  const formattedText = text
      .split(/\s+/)
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');

  return `#${formattedText}`;
}

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (typeof phoneNumber === undefined || phoneNumber === null) {
    throw new Error("Phone number is required.");
  }

  const phoneStr = String(phoneNumber);

  if (!/^\d+$/.test(phoneStr)) {
    throw new Error("Phone number must contain only digits.");
  }
  if (phoneStr.length !== 9 && phoneStr.length !== 12) {
    throw new Error("Phone number must be either 9 or 12 characters long.");
  }

  const normalizedNumber = phoneStr.length === 9 ? `998${phoneStr}` : phoneStr;

  const formatted = `+${normalizedNumber.slice(0, 3)} ${normalizedNumber.slice(3, 5)} ${normalizedNumber.slice(5, 8)} ${normalizedNumber.slice(8, 10)} ${normalizedNumber.slice(10, 12)}`;

  return formatted;
}


/**
 * Write a function that transforms text to different cases
 * @param {String} text
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 *
 */
function changeTextCase(text, caseName) {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error("Input 'text' must be a non-empty string.");
  }

  const validCases = ['camel', 'kebab', 'snake'];
  if (!validCases.includes(caseName)) {
    throw new Error(`Invalid 'caseName'. Expected one of: ${validCases.join(', ')}`);
  }
  const words = text.trim().toLowerCase().split(/\s+/);

  switch (caseName) {
    case 'camel':
      return words
          .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
    case 'kebab':
      return words.join('-');
    case 'snake':
      return words.join('_');
    default:
      throw new Error("Unexpected error. Invalid 'caseName'.");
  }
}

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error("Input 'text' must be a non-empty string.");
  }
  if (typeof word !== 'string' || word.trim() === '') {
    throw new Error("Input 'word' must be a non-empty string.");
  }
  if (typeof replacement !== 'string') {
    throw new Error("Input 'replacement' must be a string.");
  }

  const escapedWord = word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

  const regex = new RegExp(`\\b${escapedWord}\\b`, 'g');

  return text.replace(regex, replacement);
}

/**
 * Write a function to extract price in number format from the text
 * @param {String} text
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    throw new Error("Input 'text' must be a non-empty string.");
  }

  const priceMatch = text.match(/\$\d+(\.\d{1,2})?/);

  if (priceMatch) {
    return parseFloat(priceMatch[0].slice(1));
  }

  return 'No matching price was found';
}

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber
}