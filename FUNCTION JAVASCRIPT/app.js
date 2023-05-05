//! 1. Write a function that displays current date & time in your
//! browser

// function dateTime(){
//     var date = new Date();
//     document.write(date);
// }
// dateTime();

//! 2. Write a function that takes first & last name and then it
//! greets the user using his full name.

// function fullName(fname, lname) {
//     document.write(fname + " " + lname)
// }
// var a = prompt("enter a first name:");
// var b = prompt("enter a last name:")
// fullName(a,b);

//! 3. Write a function that adds two numbers (input by user)
//! and returns the sum of two numbers.

// function addNumber(a,b){
//     var add = a + b ;
//     return add;
// }
// var num1 = +prompt("Enter a first number:");
// var num2 = +prompt("Enter a second number:");
// var addTwoNUM= addNumber(num1,num2);
// document.write("addition of two number is:"+num1+" " + "+" + num2 + "="+addTwoNUM+"<br>");

//! 4. Calculator:
//! Write a function that takes three arguments num1, num2
//! & operator & compute the desired operation. Return and
//! show the desired result in your browser.
//calculator function:
// function Calculator(num1, num2) {
//   if (operator === "+") {
//     cal = num1 + num2;
//   } else if (operator === "-") {
//     cal = num1 - num2;
//   }
//   return cal;
// }
// //koe bhy number dalo square uska sqaure nkal kay dega apko
// function sqr(num) {
//   square = num * num;
//   return square;
// }
// var operator = prompt("Enter your operator:");
// var a = +prompt("enter your number");
// var b = +prompt("enter your number");
// // calculator function call
// var calculation = Calculator(a, b);
// document.write(calculation);
// // sqr function call
// var sqrOfNumber = sqr(cal);
// document.write(sqrOfNumber);

//! 5. Write a function that squares its argument.
// function square(num){
//     var sqr=num*num;
//     return sqr;
// }
// var a = prompt("Enter your number and find square")
// var final = square(a);
// document.write(final);
//! 6. Write a function that computes factorial of a number.

//! 7. Write a function that take start and end number as inputs
//! & display counting in your browser.

//!8 find hypotenuse
// const arrow = (bas, per) => {
//   hyp = (bas * bas) * (per * per);
//   return hyp;
// };
// var a = arrow(2, 2);
// console.log(a);

//! 9 calculate area of rectangle:

// const area =  (w,h) => {
//     a = w*h;
//     return a ;
// }
// const valueOne = +prompt("Enter a width: ");
// const valueTwo= +prompt("Enter a height: ");
// console.log(area(valueOne,valueTwo));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var string = prompt("Enter a string or word:");
// var strToArr = string.split("");
// var revArr = strToArr.reverse();
// var revStr = revArr.join("");
// if( string === revStr){
// console.log("string is palindrome")
// }else{
//     console.log("string is not palindrome:")
// }

//11: Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeWords(str) {
//   let words = str.split(" "); // string ko alfaz mein toarr kar array mein convert karein
//   for (let i = 0; i < words.length; i++) {
//     // har alfaz ke liye loop chalayen
//     let firstLetter = words[i].charAt(0).toUpperCase(); // pehlay har alfaz ka pehla harf uthaen aur ussay capital letter mein tabdeel karein
//     let restOfWord = words[i].slice(1); // baaqi alfaz nikal ke rakh lein (pehlay harf ko nikaal kar)
//     words[i] = firstLetter + restOfWord; // pehla harf aur baaqi alfaz ko combine karein
//   }
//   return words.join(" "); // alfaz ko dobara string mein tabdeel karein aur return karein
// }

// // example usage
// console.log(capitalizeWords("the quick brown fox")); // output: "The Quick Brown Fox"

// function capitalizeWords(str) {
//   var word = str.split(" ");
//   for (var i = 0; i <= word.length; i++) {
//     var firstLetter = word[i].chatAt(0).toUpperCase();
//     var restOfWord = word[i].slice(1);
//     word[i] = firstLetter + restOfWord;
//   }
//   return word.join(" ");
// }

function MyFunction() {
  alert("daniyal ali pro developers in pakistan");
}
