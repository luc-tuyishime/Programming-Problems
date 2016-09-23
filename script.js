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


//Generate twenty random integers from 0 to 100 and print the largest and smallest
function createList(num){
  list = [];
  for (i=1; i<=num;i++){
    list.push(Math.floor((Math.random()*100)));
  }
  return list;
}

function getMax(list){
  return Math.max.apply(Math, list);
}

function getMin(list){
  return Math.min.apply(Math, list);
}

var list=createList(20);
console.log('the numbers are ' + list);

var maxNumber = getMax(list);
console.log('the max number is' + maxNumber);

var minNumber = getMin(list);
console.log('the min number is ' +minNumber);


//Generate a single random number, from 0 to 100, then output all the even integers from 0 to the random number.
var randPrint = function(randomNumber){
  var list = [];
  for (var i=1; i<=randomNumber; i++){
    if( i % 2 === 0){
      list.push(i);
    }
  }
  return list;
};

var randomNumber = (Math.floor((Math.random() * 100)));
console.log("the number is " + randomNumber);
console.log(randPrint(randomNumber));

// Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from
// 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
function generateList(randNum){
  list = [];
  if(randNum > 40){
    for(var i = 40; i <= randNum; i++){
      if(i % 2 !== 0){
        list.push(i);
      }
    }
  }else {
    for (j = 1; j < 40 ; j++){
      if(i % 2 !== 0){
        list.push(j);
      }
    }
  }
  return list;
}

var randNum = (Math.floor((Math.random()*100)));
console.log('the number is ' + randNum);
console.log(generateList(randNum));
