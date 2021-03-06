import currencyDB from 'typographic-currency-db';

export default (input) => {

  let text = null;

  for (var key in currencyDB) {
    const currentKey = currencyDB[key];
    // use global and ignore letter case
    const pattern = new RegExp(key, 'gi');

    let textInput = (text) ? text : input;
    text = textInput.replace(pattern, currentKey);
  }

  return text;
};