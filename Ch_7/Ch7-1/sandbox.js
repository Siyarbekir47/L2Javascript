// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.href = "https://www.siyarbekir.de";
// link.setAttribute("href", "https://bf-dynamics.de");
// link.innerText = "BF-Dynamics.de website";

// const mssg = document.querySelector("p");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("class", "success");
// console.log(mssg.getAttribute("class"));
// mssg.setAttribute("style", "color: green");
// const title = document.querySelector("h1");
// title.style.color = "green";
// title.style.margin = "50px";
// title.style.accentColor = "orange";
// title.style.animation = "";
// title.style.backgroundColor = "blue";
// title.style.fontSize = "50";
// title.style.margin = "";

// const para = document.querySelector(".error");

// if (para.className == "error") {
//   para.className = "success";
// }

const paras = document.querySelectorAll("p");
// console.log(paras);
// paras.forEach((para) => {
//   let paraText = para.textContent;
//   console.log(paraText);
//   let result = paraText.toUpperCase().indexOf("ERROR");
//   console.log(result);
//   if (result != -1) {
//     para.className = "error";
//   }
//   result = paraText.toUpperCase().indexOf("SUCCESS");
//   if (result != -1) {
//     para.className = "success";
//   }
// });

paras.forEach((p) => {
  if (p.textContent.toUpperCase().includes("ERROR")) {
    p.classList.add("error");
  } else if (p.textContent.toUpperCase().includes("SUCCESS")) {
    p.classList.add("success");
  } else {
    p.classList.add("undefined");
  }
});

const title = document.querySelector(".title");
title.classList.toggle("success");
title.classList.toggle("success");
title.classList.toggle("success");
