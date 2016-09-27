//One Missing: Write a function that takes an array of integers between 1 and 10, with one missing integer, as an argument and returns the missing integer. Test this with Mocha and Chai.
function oneMissing(arr){
  //sort array
  var sortedArray = arr.slice(0).sort(function(a, b) {return a - b;});

  // *** functional aproach **//

  var missing = sortedArray.filter(function(num, i){
    return sortedArray[i+1] - num > 1;
  }).map(function(num){
     return num +1;
  });
  return missing;
}
