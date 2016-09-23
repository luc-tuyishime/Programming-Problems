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

// Mean,Variance,standart deviation of list of 10 random integers
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
    i++;
  }
  return list;
}

function calculateAverage(list){
  var averageValue = 0;
  var i = 0;
  while(i< list.length){
    averageValue += Number(list[i]);
    i++;
  }
  return Math.round(averageValue / list.length);
}

function calculateVariance(list, average){
var i = 0;
var varianceValue = 0;
while(i<list.length){
  variance.Value += Number(Math.pow(list[i] - avg, 2));
  i++;
}
return varianceValue / list.length;
}

function CalculateStandardDeviation(){
  var stdiv = Math.sqrt(variance);
  return Math.round(stdiv);
}

var list = createList(10);
console.log('the number are ' + list);

var avg = calculateAverage(list)
console.log('the number are ' + avg);

var variance = calculateVariance(list,avg);
console.log('the variance is ' + variance);

stdDev = CalculateStandardDeviation(variance);
console.log('the standard dev is ' +stdDev);

// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom() {
  return Math.random();
}

var number = getRandom();
console.log('ramdon number beetween 0 and 1 ' + number);
