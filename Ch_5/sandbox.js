//function declaration
// function greet() {
//   console.log(Arrow'hello there');

// }

// //function expression
// const speak = function(name = "lord", age = 35) {
//   console.log(name,age);
// };
// let cringe = "mario";
// let nine = 9;
// greet();
// speak(cringe, nine);


// const calcArea = function(radius) {
//   let area = 3.14159265359 * radius**2;
//   return area;
// };

// console.log(calcArea(5));

// const calcVol = function(area) {
//   let volume = area * 5;
//   return volume;
// };
// console.log(calcVol(calcArea(5)));


// //arrow function
// const calcArea = (radius) => {
//   return 3.14159265359 * radius**2;
// }


// const area = calcArea(5);
// console.log(`the area is: ${area}`);

const greet = function(){
  return 'hello, world1';
};

const greetArrow = () => "hello, world2";
const greetLongArrow = () => {
  return "hello, world3!";
};

console.log(greetArrow())
console.log(greetLongArrow())
console.log(greet())


const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++)
    {
      total += products[i] + products[i] * tax;
    }
    return total;
}

const billArrow = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

let productArray = [10, 15, 30];
let taxes = 0.19;

console.log(bill(productArray,taxes));
console.log(billArrow(productArray,taxes));


//methods
let name = "shaun";

let resultOne = name.toUpperCase();
console.log(resultOne)

//callback function

const myFunction = (callBackFunc) => 
  {
    let value = 40;
    callBackFunc(value);
  };

myFunction(value => console.log(value));

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person,index) => {
  console.log(`${index} - hello ${person}`)
}

// people.forEach((person,index) =>{
//   console.log(person, index)
// });

people.forEach(logPerson)

let ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
  //create html template for each
  html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;