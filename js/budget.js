// let calculateref = document.getElementById("submitdata");



const handleonload = () => {
    let calculateref = document.getElementById("submitdata");

    calculateref.setAttribute("onclick", "handlesubmitdata()");
    let dollarbudgetref = document.createElement("span");
    let dollarbudgettxtref = document.createTextNode("$0");


    dollarbudgetref.appendChild(dollarbudgettxtref);

    let dollarbudget = document.getElementById("dollarbudget");

    dollarbudget.appendChild(dollarbudgetref);

    // -------------------------------------------------------


    let expenseref = document.createElement("span");
    let expensettxtref = document.createTextNode("$0");

    expenseref.appendChild(expensettxtref);
    dollarbudget = document.getElementById("expensebudget");


    // let expensebudget = document.getElementById("expensebudget");

    expensebudget.appendChild(expensettxtref);

    // ---------------------------------------------------------

    let balanceref = document.createElement("span");
    let balancettxtref = document.createTextNode("$0");

    balanceref.appendChild(balancettxtref);

    dollarbudget = document.getElementById("balancebudget");

    // let balancebudget = document.getElementById("balancebudget");

    balancebudget.appendChild(balanceref);

    event.preventDefault();

}

const handlesubmitdata = () => {
    let userbuddata = document.getElementById("userbuddata").value;
    console.log(userbuddata);

    document.getElementById("dollarbudget").innerHTML = "$" + userbuddata;
    document.getElementById("balancebudget").innerHTML = "$" + userbuddata;


    event.preventDefault();
    console.log("nnnn");
}

// calculateref.addEventListener("submit", handlesubmitdata)

window.onload = handleonload;