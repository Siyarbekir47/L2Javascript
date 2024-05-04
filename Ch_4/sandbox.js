//for loops are used to iterate over a block of code a certain number of times.
//for loops are often used when the number of iterations is known before entering the loop.
//for loops are the most common type of loop in JavaScript.
//The for loop has the following syntax:
//for (statement 1; statement 2; statement 3) {
//  // code block to be executed
//}
//Statement 1 is executed (one time) before the execution of the code block.
//Statement 2 defines the condition for executing the code block.
//Statement 3 is executed (every time) after the code block has been executed.
// //The example below will print "Hello World" 5 times:

// for (let i = 0; i < 5; i++) {
//   console.log("Hello World");
// }

// //The example below will print the numbers 0 to 4:
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//The example below will print the names of the ninjas:

// // let ninjas = ['shaun', 'ryu', 'chun-li'];
// for (let i = 0; i < ninjas.length; i++) {
// //   console.log(ninjas[i]);
// let html = `<div>${ninjas[i]}</div>`;
// console.log(html);
// }



// while loops are used to execute a block of code multiple times.
// while loops are often used when the number of iterations is not known before entering the loop.
// while loops are the most basic type of loop in JavaScript.
// The while loop has the following syntax:
// while (condition) {
//   // code block to be executed
// }
// The example below will print the numbers 0 to 4:

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//The example below will print the names of the ninjas:

// let ninjas = ['shaun', 'ryu', 'chun-li'];
// let i = 0;
// while (i < ninjas.length) {
//   console.log(ninjas[i]);
//   i++;
// }

// do/while loops are a variant of the while loop.
// This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// The do/while loop has the following syntax:
// do {
//   // code block to be executed
// }
// The example below will print the numbers 0 to 4:

// let i = -10;
// do {
//   console.log(i);
//   i++;
// }
// while (i < 5);

//if statements are used to make decisions in code.
//The if statement has the following syntax:
//if (condition) {
//  // block of code to be executed if the condition is true
//}
//The example below will print "Hello World" if x is greater than y:

// let x = 10;
// let y = 5;
// if (x > y) {
//   console.log("Hello World");
// }
// else {
//   console.log("Goodbye World");
// }
// let age = 25;
// if (age > 20) {
//   console.log("You are over 20 years old");
// }
// else {
//   console.log("You are under 20 years old");
// }

// const password = "p@ssword";

// if (password.length >= 8) {
//   console.log("That password is long enough!");
// }
// else {
//   console.log("Password is not long enough!");
// }

// let user = false;

// if (!user) {
//   console.log("You must be logged in to continue");
// }
// else
// {
//   console.log("You are logged in");

// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }
//   console.log("Your score: ", scores[i]);
//   if (scores[i] === 100) {
//     console.log("Congrats, you got the top score!");
//     break;
//   }
// }
// let totalScore = 0;
// for(let i = 0; i < scores.length; i++) {
//   totalScore += scores[i];
// }
// console.log("Your total score is: ", totalScore);


//switch statements are used to make decisions based on multiple conditions.
//The switch statement has the following syntax:
// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
//This is how it works:
//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.
//The break keyword stops the execution of the block.
//This is an example of a switch statement:
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is " + day);

let age = 25;
switch(age) {
    case 25:
        console.log("You are 25 years old");
        break;
    case 30:
        console.log("You are 30 years old");
        break;
    default:
        console.log("You are not 25 or 30 years old");
}


//checking scope

let scope = 30;

if (true) {
  let scope = 40;
  console.log("inside code block1", scope);
}
console.log("outside code block1", scope);
if (true) {
 scope = 50;
  console.log("inside code block2", scope);
}
console.log("outside code block2", scope);

if (true) {
  let john = 60;
  console.log("inside code block3", john);
}
// console.log("outside code block3", john); // This will throw an error