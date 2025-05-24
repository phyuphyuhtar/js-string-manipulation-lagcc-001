'use strict';

const decoder = function(encodedMessage) {
  return encodedMessage
    .split('')
    .reverse()
    .join('')
    .replace(/\$/g, ' ')
    .replace(/7/g, 't')
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a');
};

module.exports = decoder;
