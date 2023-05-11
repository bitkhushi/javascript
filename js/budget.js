let handleexpenseamt = document.getElementById("frmexpense");
let calculateref = document.getElementById("frm");
let expense = [];
let total = 0;
let update = false;
let uid = null;
const handleonload = () => {

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
const handleexpamt = () => {



    document.getElementById("tbldisdata").style.display = " block"
    let exref = document.getElementById("expenseinput").value;
    let expamt = document.getElementById("expamtinput").value;


    console.log(exref, expamt);

    let rno = Math.floor(Math.random() * 100);
    console.log(rno);
    let trref = document.createElement("tr");
    trref.setAttribute("id", "row" + rno);



    let tdcost = document.createElement("td");

    let tdamt = document.createElement("td");

    let actd = document.createElement("td");

    let amttxt = document.createTextNode(expamt);

    let costtxt = document.createTextNode(exref);


    let tdaction1 = document.createElement("i");
    let tdaction2 = document.createElement("i");
    tdaction1.setAttribute("class", "fa-solid fa-pen-to-square");
    tdaction2.setAttribute("class", "fa-solid fa-trash");

    tdaction2.setAttribute("onclick", "handleremove(" + rno + ")");
    tdaction1.setAttribute("onclick", "handleedit(" + rno + ")")

    tdcost.appendChild(costtxt);
    tdamt.appendChild(amttxt);
    trref.appendChild(tdcost);
    trref.appendChild(tdamt);
    trref.appendChild(actd);

    actd.appendChild(tdaction1);
    actd.appendChild(tdaction2);


    let tbdy = document.getElementById("tbldata");

    tbdy.appendChild(trref);

    expense.push({
        id: rno,
        name: exref,
        cost: expamt,

    });
    console.log(expense);

    handlebalancedata();



    event.preventDefault();
}

const handlebalancedata = () => {
    let total = 0;
    let answer = 0;
    expense.map((v) => {


        total += parseInt(v.cost);
        console.log(total);



    });

    let budgetp = document.getElementById("userbuddata").value;

    if (budgetp > total) {
        document.getElementById("expensebudget").innerHTML = "$" + total;


        answer = budgetp - total;
        console.log(answer);

        document.getElementById("balancebudget").innerHTML = "$" + answer;
    } else {
        alert("check your expense amount");
        document.getElementById("expamtinput").value = '';
    }

    // handleedit();

    event.preventDefault();

}

const handleremove = (rno) => {

    let trrefrm = document.getElementById("row" + rno);
    trrefrm.remove();
    console.log(trrefrm);

    expense.map((v, i)=>{
        if (v.id === rno){
            expense.splice(i, 1 )
        }             
    });

    // console.log((expense));

    // let fdata = expense.filter((v, i) => v.id != rno);

    // expense = [...fdata];

    // console.log(expense);



}

const handleedit = (rno) => {

update = true;

    // console.log("llll");

    let fdata = expense.filter((v, i) => v.id === rno);


    let txt = fdata[0].name;
    let txt1 = fdata[0].cost;

    document.getElementById("expenseinput").value = txt;
    document.getElementById("expamtinput").value = txt1;

    uid = rno;
    //  document.getElementById("expenseinput").innerHTML = v.name;

    event.preventDefault();

}

const handleexdes = () => {

    if (update) {
        handleupdatedata();
    } else {
        handleexpamt();
    }
}


const handleupdatedata = () => {

    console.log("llllll");

    let newvalex = document.getElementById("expenseinput").value;
    let newcostex = document.getElementById("expamtinput").value;

    let newname = newvalex;
    let newcost = newcostex;

    console.log(newname, newcost);

    let udata = expense.map((v) => {
        if (v.id === uid) {
            return {
                id: uid,
                name: newname,
                cost: newcost
            }
        } else {
            return v;
        }
        
    });

    console.log(udata);


   let tr =document.getElementById("row"+uid);

      tr.children[0].innerHTML = newname;
      tr.children[1].innerHTML = newcost; 

    //   expense.map((v)=>{
    //     vvv= v.cost;
        
    //   });
    //   console.log(vvv);

     let txt =  document.getElementById("expensebudget").innerHTML=newcost;
    console.log(txt);
    handlebalancedata();
    
}


calculateref.addEventListener("submit", handlesubmitdata);
handleexpenseamt.addEventListener("submit", handleexdes);

window.onload = handleonload;