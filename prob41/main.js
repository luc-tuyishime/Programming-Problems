//Find Odd Occurring Element: Given an integer array, one element occurs odd number of times and all others have even occurrences. Find the element with odd occurrences.
(function() {

  'use strict';

  module.exports = function (arr) {
    return arr.reduce(function(num1, num2) {
      return num1 ^ num2;
    }, 0);
  };

}());

// assumes the array is sorted
