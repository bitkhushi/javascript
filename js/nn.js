let handleexpenseamt = document.getElementById("frmexpense");
let expense = [];
let total = 0;
const handleonload = () => {

    let calculateref = document.getElementById("frm");

    calculateref.setAttribute("onsubmit", "handlesubmitdata()");

    let dollarbudgetref = document.createElement("span");
    let dollarbudgettxtref = document.createTextNode("$0");


    // dollarbudgetref.appendChild(dollarbudgettxtref);

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

const handleexpamt = () => {


    let exref = document.getElementById("expenseinput").value;
    let expamt = document.getElementById("expamtinput").value;


    console.log(exref, expamt);


    let trref = document.createElement("tr");

    let tdcost = document.createElement("td");

    let tdamt = document.createElement("td");

    let actd = document.createElement("td");

    let amttxt = document.createTextNode(expamt);

    let costtxt = document.createTextNode(exref);

    let tdaction1 = document.createElement("button");
    let tdaction2 = document.createElement("button");
    let tdac1txt = document.createTextNode("edit");
    let tdac2txt = document.createTextNode("delete");


    tdcost.appendChild(costtxt);
    tdamt.appendChild(amttxt);
    trref.appendChild(tdcost);
    trref.appendChild(tdamt);
    trref.appendChild(actd);
    tdaction1.appendChild(tdac1txt);
    tdaction2.appendChild(tdac2txt);
    actd.appendChild(tdaction1);
    actd.appendChild(tdaction2);


    let tbdy = document.getElementById("tbldata");

    tbdy.appendChild(trref);

    expense.push({
        name: exref,
        cost: expamt,

    });
    console.log(expense);

    handlebalancedata();
   


    event.preventDefault();
}

const handlebalancedata = () => {
    let total = 0;
    let answer = 0
    expense.map((v) => {


        total += parseInt(v.cost);
        console.log(total);



    });

    

    document.getElementById("expensebudget").innerHTML = "$"+total;

    let budgetp = document.getElementById("userbuddata").value;

    answer = budgetp - total;
    console.log(answer);

    document.getElementById("balancebudget").innerHTML = "$" + answer;

   

    event.preventDefault();

}




handleexpenseamt.addEventListener("submit", handleexpamt)





window.onload = handleonload;