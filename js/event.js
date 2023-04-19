
let y = document.getElementById("btnclick");
let w = document.getElementById("mo");
let a = document.getElementById("md");
let keydownev=document.getElementById("fname");
let keyupev=document.getElementById("lname");
let emailref = document.getElementById("email");



function handle(){
    let  x = "dgdtthfghfg";
    console.log(x);
}

function btnover(){
    let z ='bhsgchcf';
    console.log(z);
}
function mdown(){
    let b = 'ehfhewfhf'
    console.log(b);
}
function keydownevent(){
    console.log(keydownev.value);
}
function keyupevent(){
    console.log(keyupev.value);
}

keydownev.addEventListener('keydown',keydownevent);
keyupev.addEventListener('keyup',keyupevent)

y.addEventListener('click', handle);




w.addEventListener('mouseover',btnover);

a.addEventListener('mousedown',mdown);

let text = "it's alright";
document.getElementById("msg").innerHTML=text.length;


function emailfocus() {
    let em= "email"
    console.log(em);
}

emailref.addEventListener('focus',emailfocus);

// window.onload= function(){
//     console.log("page loded");
// }
window.onunload= function(){
    console.log("page unloded");
}

window.onresize=function(){
    console.log("page resized");
}





