// // // Document Object Model!
// const para = document.querySelector("p");
// const paraTwo = document.querySelector(".error");
// const paraThree = document.querySelector("div.error");
// console.log(paraTwo);
// console.log(para);
// console.log(paraThree.innerText);
// paraThree.innerText = "Gonna change real quick";
// const buttonOne = document.querySelector("button");
// console.log(buttonOne);

// function ButtonOneClick() {
//   const paras = document.querySelectorAll("p");
//   paras.forEach((para) => {
//     para.innerHTML = "test";
//   });
// }

// //get an element by ID
// const title = document.getElementById("page-title");

// //get elements by their class
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// //get elements by ther tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras[1]);
const para = document.querySelector("p");
const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  para.innerHTML = "NEW LINE HERE!";
});

const content = document.querySelector(".content");
console.log(content.innerHTML);

content.innerHTML = "<h1>TITLE NOW!</h1>";
content.innerHTML += "<h2>Titlescreen below</h2>";
content.innerHTML += "<p class='paratest'>TEXTNOW</p>";

const paranew = document.querySelector(".paratest");

paranew.innerHTML = "test";
paranew.innerHTML = "SPONSORS: ";
const people = ["mario", "luigi", "yoshi"];
people.forEach((user) => {
  paranew.innerHTML += `<h2>${user}</h2>`;
});
