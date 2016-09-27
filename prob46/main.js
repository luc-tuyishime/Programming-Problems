//Create a function that takes a word as an argument and returns true if and only if all of the vowels in the word are the same. myFn('oligopoly') => false. myFn('zoom') => true
var flattenArray = require('./util.js');

var nestedArray = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
var result = flattenArray(nestedArray, function(err,data){
  if (err){
    return err;
  }else {
    return data;
  }
});
console.log(result);
