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

//Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
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

//Generate a single random number, from 0 to 100. If the number is greater than 40 then output all the odd integers from that number down to 40. If the number is less than 40, output all the odd integers from that number down to 0.
function generateList(randNum){
  var greaterThan = [];
  var lessThan = [];
  if(num > 40){
    for(var i = 40; i<= 40 ; i++){
      if(i % 2!== 0){
      greaterThan.push(i);
    }
  }

  return greaterThan.reverse();

  }
else {
  for(var j = 1; j<=40 ;j++){
    if(j % 2!== 0){
    lessThan.push(j);
   }
 }
 return lessThan.reverse();
  }
}

var num = (Math.floor((Math.random()*100)));
console.log('the number is ' + num);
console.log(generateList(num));

//Discount Percentage: Write a function that takes a dollar amount and a discount percentage and returns the total discount amount. Return a warning if the discount amount is greater than 100 or less that 0 percent. Test the results.

function discount(totalAmount, discountPecentage){
  if (discountPecentage > 100 || discountPecentage < 0){
    return "that discount is not acceptable";
  }
  return totalAmount * (discountPecentage * 0.01);
}

console.log(discount(100,10) === 10);
console.log(discount(100,100) === 100);
console.log(discount(100,0) === 0);

console.log(discount(100, 101) === "that discount is not acceptable");
console.log(discount(100, -1) === "that discount is not acceptable");

//  Generate n random integers from 0 to 100, then output them in ascending order.
rand_nums = []
var generate_random = function (num){
  for(var i=1; i<= num ;i++){
    rand_nums.push(Math.floor((Math.random()*100)));
  }
  document.write(rand_nums.sort() + "<br/>")
}
generate_random(10)
rand_nums = []
generate_random(20)
rand_nums = []
generate_random(5)

// Write a program that calculates and shows the value of (x to the nth power). Let both integers fall within the range of 2 through 20.
var calculatePower = function (num1, num2){
  for(var i = 1 ; i < num2 ; i++){
    (total *= num1);
  }
  return total;
}
total = 1
rand1 = Math.floor((Math.random()*20))
rand2 = Math.floor((Math.random()*20))
document.write(" what is " +   rand1.toString() +" to the " + rand2.toString() +" power?<br\>")
document.write("answer: " + calculatePower(rand1, rand2))

//Triangle: Write a function that takes a single number as an input and returns that many lines. On the first line there is one '#' character. On the second there are two. And so on. This will create a nice triangle.
function createTriangle(num){
  var line = '';

  for(i = 0; i< num; i++){
    line += "*";
    console.log(line);
  }
}
console.log(createTriangle(10));

//Write a function that takes two random 10-character strings as arguments, which returns True when the first string starts with the first two characters in the second string - and false otherwise.
function random_string(num) {
    text = "";
    letters = "abcdefghijklmnopqrstuvwxyz";
    for( var i=0; i <= num; i++ )
        text += letters.charAt(Math.floor(Math.random() * letters.length));
    return text;
}

function char_test(string1, string2) {
	if (string1[0,1] === string2[0,1]) {
		return true;
	} else {
		return false;
	}
}

rand_string1 = random_string(10)
rand_string2 = random_string(10)
document.write("The strings are " + rand_string1 + " and " + rand_string2 + "<br>")
document.write(char_test(rand_string1, rand_string2)+"<br>")


//Write a function that takes a paragraph as an argument and returns an array that contains each string as an element.
function paragraph_to_array(paragraph){
  return paragraph.split(" ");
}
document.write(paragraph_to_array("Non sint quinoa fanny pack. Tousled kogi qui ironic mixtape organic sunt Bushwick retro plaid tonx iPhone authentic Truffaut chillwave trust fund flannel leggings messenger bag banjo eiusmod synth Cosby sweater sapiente pour-over")+"<br>")

//Create a simple webpage that includes three tags, an <h1>, <h2> and <p>, then using jQuery, create an alert that outputs the tag name when you click on the tag.
$(document).ready(function() {
 $("h1").click(function() {
   alert("This is a header.");
 });

 $("h2").click(function() {
   alert("This is a sub header");
 });

 $("p").click(function() {
   alert("This is a paragraph.");
 });
});

//Write a function that takes an object/hash/dictionary of people (keys) and their subsequent ages as its argument, and then it returns the name of the oldest living person.
function key_with_max_val(hash){
  var max = -Infinity;
  for (x in hash){
    if(hash[x] > max){
      max = hash[x];
    }
  }
  return max;
}
var people = {'mike':27, 'jack':12, 'luc':34, 'pierre':50, 'paul':33}
console.log('the oldest person is ' +(key_with_max_val(people))+"<br>")

//Reverse: Write a function that takes a string as an argument and returns the string in reversed order. Test if the string is the same reversed (Palindrome).
 function reverse(){
   return string.split('').reverse().join('');
 }
 var string = 'hi i am a random string.';
 console.log(reverse(string));

 //Factorial: Write a function that takes a random number as an argument and then returns the factorial of that given number.
function factorial(num){
  total = 1 ;
  for(var i = 1; i<= num; i++ ){
    total *= 1;
  }
  return total
}
var rand_num = (Math.floor((Math.random()*10)))
document.write("the factorial of " + rand_num + "is" + factorial(rand_num)+"<br>")

//Longest Word: Write a function that takes a string and returns the longest word in the string
function longest_word(str){
  array = str.split(" ");
  max = " ";
  for(i = 0; i < array.length; i++){
    if(array[i].length > max.length){
      max = array[i];
    }
  }
  return max;
}

var string = "I am fffffffffffdddslsssss a sffff sdsdsssssssss";
document.write("the longest word is" + (longest_word(string))+"<br>")

//Longest Word 2: Refactor the "Longest Word" function so that it ignores punctuation.
function remove_punct(str){
  return str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"")
}
function longest_wordd(str){
  array = str.split(" ");
  max = " ";
  for(i = 0;i < array.length; i++){
    if(array[i].length > max.length){
      max = array[i];
    }
  }
  return max;
}
var string = "i am $$$$$$$$$$ffjrkfrffff a fdhddddddddd&&&&&& fjkefjrifjrefro";
document.write("the longest string is " + remove_punct(longest_wordd(string))+"<br>")

//Time Difference: Write a function that takes two times in hours and minutes and returns the difference.
// function time_difference(s,e){
//   return (e - s)/1000 //sec
// }
//
//  var start = new date(2013, 0, 9, 10);
//  var end = new date(2013, 0, 1, 17, 10);
//
//  var dif = time_difference(start,end)

//Time Convert: Write a function that takes an integer then returns the number in hours and minutes. For example, 63 should return 1:3.
function TimeConvert(num){
  hours = Math.floor(num / 60);
  minutes = num % 60;
  return hours +":"+ minutes;
}
document.write(TimeConvert(63) + "<br>")
document.write(TimeConvert(126) + "<br>")

//Using JavaScript, create a function that handles errors. The function takes two integers as inputs and returns the result of dividing them. If the denominator is 0, throw an error.
function divide(n1,n2){
  try{
    if (n2 == 0){
      throw("divide by zero error.");
    }else {
      return n1 / n2
    }
  } catch (e){
    alert("error: " + e)
  }
}

var num1 = 100;
var num2 = 2;
console.log(divide(num1,num2))

var num1 = 200;
var num2 = 2;
console.log(divide(num1,num2))

//Using jQuery and CSS, create new .js and .css files (prob30.css and prob30.js, respectively) so that when a user clicks on a button, the background color of the page will change. Use the HTML code in the corresponding folder. You do not have to edit the file.

$(function() {

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  })

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  })

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  })

  $("button#white").click(function() {
    $("body").removeClass();
  })
})

//Mad Libs: Using HTML, CSS, and jQuery, create a mad libs game. Use an HTML form to take user input. Display the results however you'd like. Get creative.

//Create a simple to-do list using jQuery. Make sure the user can remove the items.
$('form').submit(function(){
  if($('input').val()!== ''){
    var input_value = $('input').val();
    $('ol').append('<li>' +input_value+ '<a href="">x</a></li>');
  };
  $('input').val('');
  return false;
});

$(document).on('click','a',function(e){
  e.preventDefault();
  $(this).parent().remove();
});

//Write a function that takes a single string as the input then return the number of vowels the string contains. Do not count "y" as a vowel.

//Xs and 0s: Create a function that takes a string of "x"s and "o"s as inputs. Return True if the number of "x"s and "o"s is even - and False otherwise.
function exOh(str){
  var arr = str.split('');
  var ex = filtered(arr,'x');
  var oh = filtered(arr,'o');
  if(ex.length === oh.length){
    return true;
  }else{
    return false;
  }
}
function filtered(arr, value){
  return arr.filter(function(char){
    return char.toLowerCase() === value;
  });
}
console.log(exOh('xooxxo'));
console.log(exOh('xoxox'));
console.log(exOh('xoOx'));

//Write a function that takes an array of integers and returns the number of users in it. Then refactor this to use a helper function to first test whether an integer is zero or not that's called from the original function.
function countZero(array){
  var count = 0;
  for(var i = 0; i < array.length ; i++){
    array[i] === 0 ? count++ : null;
  }
  return count;
}
console.log(countZero([0,1,0,2,3]))
console.log(countZero([0,1,0,0,0]))
console.log(countZero([0]))
//** refactor with a helper function */
function countZeroHelper(array){
  var count = 0;
for(var i = 0; i < array.length; i++){
  hasZeros(array[i]) === true ? count++ : null;
}

return count;
}

function hasZeros(integer){
  integer === 0 ? true : false;
}
console.log(countZeroHelper([0,1,0,2,3]))
console.log(countZeroHelper([0,1,0,0,0]))
console.log(countZeroHelper([0]))

//
function processParagraph(paragraph){
  var array = paragraph.split(" ")
}

//a function that takes argument And then checks the type (HTML tag) of the argument (H1, HX, or p). H1 has one "%", HX has two "%", and a p has none. Return each argument without the "&" characters as well as the type.

function processParagraph(paragraph){
  var array = paragraph.split(" ")
  for (var i = 0; i < array.length; i++){
    if(array[i].charAt(0) === "%" && array[i].charAt(1)){
      return console.log("this is H1:" + paragraph.slice(("%", 2)))
    }else if(array[i].charAt(0) === "%"){
      return console.log("this is an HX:" + paragraph.slice(("%", 1)))
    }else {
      return console.log("this is a p:" + paragraph)
    }
  }
}
var p1 = "% the book of porgramming"
var p2 = "%% the two aspects"
var p3 = "Below the surface of the machine, the program moves. Without effort," +
         "it expands and contracts. In great harmony, electrons scatter and" +
          "regroup. The forms on the monitor are but ripples on the water. The " +
           "essence stays invisibly below."
  processParagraph(p1)
  processParagraph(p2)
  processParagraph(p3)

  //Build a function, splitParagraph(), which, takes a paragraph string as an input, and returns an array of paragraph fragments. (do not use any punctuation)
  function splitParagraph(string) {
	return string.split(" ")
}

console.log(splitParagraph("happy birthday to you happy birthday to you"))

//Guessing Game: Create a basic website that asks the user to input an integer from 1 to 100. When the user inputs a number, it should tell the user if the number they entered is too high, too low, or the exact number. When the game is over - e.g., when the user guesses correctly - display a "Start Over" button allowing the user to play again! Also, add a "Give Up" button, which displays the number and starts the game over. You should only have three files - index.html, main.js, and main.css. Use either jQuery or Angular for interacting with the DOM.
