function data(){
    let bill = parseInt(document.getElementById("bill").value);
    let pertip = parseInt(document.getElementById("pertip").value);
    let total;
    let totalbill;
    total = (bill * pertip) / 100;
    totalbill = bill + total;

    parseInt(document.getElementById("atip").value = total);
    parseInt(document.getElementById("tbill").value = totalbill);

    if (bill == null || bill == "") {
    //    var y= document.getElementById("msg").innerHTML = "enter";
        alert("enter");
        // return false;
    } else if(pertip == null || pertip == ""){
    //    var y= document.getElementById("msg").innerHTML = "thankyou";
        alert("enter");
    }else{
        alert("thankyou");
    }
    console.log(bill, pertip, total, totalbill);


}
