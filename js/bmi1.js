function cal() {

    let w = parseInt(document.getElementById("weight").value);
    let h = parseInt(document.getElementById("height").value);



    let meter = h / 100;

    let bmi = w / (meter * meter);

    answer = bmi.toFixed(2);

    console.log(w, h, meter, bmi, answer);

    document.getElementById("result").innerHTML = answer

    if (answer < 18.5) {
        document.getElementById("msg").innerHTML = "Underweight"
    } else if (answer >= 18.5 && answer <= 24.9) {
        document.getElementById("msg").innerHTML = "Normal"
    } else if (answer >= 24.9) {
        document.getElementById("msg").innerHTML = "OverWeight"

    }

}