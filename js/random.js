

let x = document.getElementById("box1").innerHTML = Math.floor(Math.random() * 10);
let y = document.getElementById("box2").innerHTML = Math.floor(Math.random() * 10);

let z;

let answer;

z = x + y;



function handledata() {
    let answer = document.getElementById("answer").value;

    if (z == answer){
        // let res = prompt("your answer is correct");
        // document.getElementById("ans").innerHTML= "your answer is correct";
        // let science  = parseInt(prompt("please enter marks of science subject"));
        alert("Youe answer is correct")

        
    } else {
        alert("Youe answer is incorrect ,Your Correct Answer is : "+z+" ");

    }

  
}
console.log(z);
console.log(ans);




















