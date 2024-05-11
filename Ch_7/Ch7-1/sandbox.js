const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.href = "https://www.siyarbekir.de";
link.setAttribute("href", "https://bf-dynamics.de");
link.innerText = "BF-Dynamics.de website";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("style", "color: green");
