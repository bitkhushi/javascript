function data() {
    let bill = parseInt(document.getElementById("bill").value);
    let pertip = parseInt(document.getElementById("pertip").value);
    let total;
    let totalbill;
    total = (bill * pertip) / 100;
    totalbill = bill + total;

    parseInt(document.getElementById("atip").value = total);
    parseInt(document.getElementById("tbill").value = totalbill);   


    // console.log(isNaN(bill));
    if (isNaN(bill) || isNaN(pertip)) {
        alert("PLEASE FILL THE INFORMATION");
    } else {
        alert("THANK YOU");
    }


    console.log(bill, pertip, total, totalbill);


}
