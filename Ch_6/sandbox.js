// const blogs = [
//   {
//     title: "why mac & cheese rules",
//     likes: 30,
//   },
//   {
//     title: "10 things to make with marmite",
//     likes: 50,
//   },
// ];

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@mail.com",
  location: "berlin",
  blogs: [
    {
      title: "why mac & cheese rules",
      likes: 30,
    },
    {
      title: "10 things to make with marmite",
      likes: 50,
    },
  ],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs: function () {
    console.log("BLOGS: ");
    this.blogs.forEach((blog) => {
      console.log(`${blog.title} has ${blog.likes} likes!`);
    });
  },
};

// user.login();
// user.logout();
user.logBlogs();

const area = 7.8;
console.log(Math.PI);

let test = Math.trunc(area);
console.log(test);

//random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

scoreOne = 99;
console.log(`scoreOne:  ${scoreOne} \nscoreTwo:  ${scoreTwo}`);

//reference type
const userOne = {
  name: "mario",
  age: 30,
};
const userTwo = userOne;

userOne.age = 35;
//both ages changed, becouse only pointer to referenc in heap, and no primitive value in stack
console.log(`userOne.Age:  ${userOne.age} \nuserTwo.age:  ${userTwo.age}`);
