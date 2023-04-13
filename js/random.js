

let x = document.getElementById("box1").innerHTML = Math.floor(Math.random() * 10);
let y = document.getElementById("box2").innerHTML = Math.floor(Math.random() * 10);

let z;

let answer;

z = x + y;



function handledata() {
    let answer = document.getElementById("answer").value;

    if (z == answer){
        
        alert("Youe answer is correct");

        
    } else {
        alert("Youe answer is incorrect ,Your Correct Answer is : "+z+" ");

    }

 

    location.reload();
}
// console.log(z);
// console.log(ans);




















