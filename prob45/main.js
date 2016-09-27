//CSV Parse: Write a function that takes a string as an argument, where all values are either and integer or a string, and then return an array of the parsed input string. Examples:'3,7,9,1,25' => [ 3, 7, 9, 1, 25 ]

function csvParse(inputString) {
  var outputArray = [];
  inputArray = inputString.split(',');
  for (var i = 0; i < inputArray.length; i++) {
    if (!Number.isNaN(+inputArray[i])) {
      outputArray.push(+inputArray[i]);
    } else {
      outputArray.push(inputArray[i].replace(/['"]+/g, '').trim());
    }
  }
  return outputArray;
}

module.exports = csvParse;
//
var expect = require('chai').expect;
var csvParse = require('./csv_parse.js');


describe('CSV Parse', function() {
  it('should parse a string of integers correctly', function() {
    var input = '3,7,9,1,25';
    var output = [ 3, 7, 9, 1, 25 ];
    expect(csvParse(input)).to.deep.equal(output);
  });
  it('should parse a string of strings correctly', function() {
    var input = '"3","7","9","1","25"';
    var output = ["3", "7", "9", "1", "25"];
    expect(csvParse(input)).to.deep.equal(output);
  });
  it('should parse a string of integers and strings correctly', function() {
    var input = '1, "one", 2, "two", 3, "three"';
    var output = [1, "one", 2, "two", 3, "three"];
    expect(csvParse(input)).to.deep.equal(output);
  });
});
