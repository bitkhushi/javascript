let stuname = prompt("please enter your name");
let rollno = parseInt(prompt("please enter your roll_no"));
let english = parseInt(prompt("please enter marks of english subject"));
let hindi = parseInt(prompt("please enter marks of hindi subject"));
let math = parseInt(prompt("please enter marks of math subject"));
let gujarati= parseInt(prompt("please enter marks of gujarati subject"));
let science  = parseInt(prompt("please enter marks of science subject"));

let total;

total = english + hindi + math + gujarati + science;


let per;

per = total/400*100;

document.getElementById("stuname").innerHTML = stuname;
document.getElementById("rollno").innerHTML = rollno;
document.getElementById("english").innerHTML = english;
document.getElementById("hindi").innerHTML = hindi;
document.getElementById("math").innerHTML = math;
document.getElementById("gujarati").innerHTML = gujarati;
document.getElementById("science").innerHTML = science;
document.getElementById("total").innerHTML = total;
document.getElementById("per").innerHTML = per;




console.log(stuname);
console.log(rollno);
console.log(english);
console.log(hindi);
console.log(math);
console.log(gujarati);
console.log(science);
console.log(total);
console.log(per);