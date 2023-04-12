function calculate() {
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let convert;
    let bmical;
    convert = height / 100;
    bmical = weight / (convert * convert);
   

    if(bmical > 17 && bmical < 18.5){
        document.getElementById("answer").innerHTML = "Thin ness"
        
    }else if (bmical > 18.5 && bmical < 25) {
      document.getElementById("answer").innerHTML = "Normal";

    }else if (bmical > 25 && bmical < 30) {
        document.getElementById("answer").innerHTML = "Overweight";

    }else{
        document.getElementById("answer").innerHTML = "Severe Thinness";

    }

    console.log(height);
    console.log(weight);
    console.log(convert);
    console.log(bmical);
    console.log(answer);
}