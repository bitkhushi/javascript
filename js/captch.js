let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);



parseInt(document.getElementById("num1").innerHTML = n1);
parseInt(document.getElementById("num2").innerHTML = n2);

let organs;
organs = n1 + n2;
function handle() {

    let y = parseInt(document.getElementById("ans").value);

    console.log(y);


    if (organs === y) {
        alert("correct");
    } else {
        alert("wrong" + "correct answer is" + organs);
    }

    location.reload();


}
