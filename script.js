var num1 = Math.floor((Math.random()*(100)))
var num2 = Math.floor((Math.random()*(100)))

var average = mean(num1, num2);
var variance = variance(num1,num2,average);
var stdiv = stdiv(variance);

console.log('Numbers: ' + num1 + ' ' + num2);
console.log('mean '+ average);
console.log('Variance '+ variance);
console.log('Standard deviation '+stdiv);


function mean(num1,num2){
  return num1 + num2 / 2;
}

function variance(num1,num2,average){
  return Math.pow((num1 - average), 2) + Math.pow((num2 - average), 2);
}

function stdiv(variance){
  return Math.sqrt(variance);
}


function createList(num){
  var i = 0 ;
  var list = [];
  i = 1;
  while (i <= num){
    list.push(Math.floor(Math.random()*(100)));
  }
}

var list = createList(10);
console.log('The numbers are ' + list);
