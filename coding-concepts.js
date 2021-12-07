// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: .length is a method to calculate how many characters in the string or array. Even a space counts.


// --------------------2) What will this log?

var greeting = "Hello World!"
//console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: console.log(greeting[3]) outputs the fourth index of the array, which is "l"(second l in the Hello World). The first index is greeting[0], which is "H"....The fourth index is greeting[3], which is "l".


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: index =1 , so languages[index] is languages[1], languages[1] is the second index of array languages, which is Ruby.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:  SATURDAY SUNDAY
// b) Verify and explain: I got it wrong. System didn't show anything, and show some error messages. I guess .toUpperCase () method only works in a string,which can upcase all the letters in a string. But doesn't work in array. I think we can covert it to string first by using .join(" ") and then upcase them.
// var newStr = weekendDays.join(" ");
// console.log(newStr.toUpperCase());  // Problem solved!


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: dataTypes.length will return 3, which is the length of the array. And the typeof method will show the type of 3, 3 is a number type. so it will show number.
