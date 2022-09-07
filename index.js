const element = document.getElementById("button");
element.addEventListener("click", myfunction);

function myfunction(){
let val=document.getElementsByTagName("p");
let last= val[val.length-1];
let newtext=last.innerText;

let secondlast=val[val.length-2];
secondlast.append(` ${newtext}`);
// document.getElementById("test").appendChild(secondlast);
last.remove();

};
