'use strict';

const encoder = function(message) {
  return message
    .replace(/a/gi, '4')
    .replace(/e/gi, '3')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
    .replace(/t/gi, '7')
    .replace(/\s/g, '$')
    .split('')
    .reverse()
    .join('');
};

module.exports = encoder;
