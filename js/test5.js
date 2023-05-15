let frmref = document.getElementById("frmref");
let arr=[];
const handleplus = ()=>{
  

    let inputfrref = document.createElement("input");
    inputfrref.setAttribute("type","text");
    inputfrref.setAttribute("placeholder","Enter first name");
    inputfrref.setAttribute("id","datain");
    document.body.appendChild(inputfrref);

    

    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button");

    let btn1txt = document.createTextNode("+");
    let btn2txt = document.createTextNode("-");
    btn1.setAttribute("onclick" ," handlereadd()")

    btn2.setAttribute("onclick" ," handleremove()")

    btn1.appendChild(btn1txt);
    btn2.appendChild(btn2txt);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);


   




    let inputlsref = document.createElement("input");
    inputlsref.setAttribute("type","text");
    inputlsref.setAttribute("placeholder","Enter last name");
    document.body.appendChild(inputlsref);

    let brtag = document.createElement("br");
    

    brtag.appendChild(inputfrref);



    event.preventDefault();



}

const handlesubmitdata=()=>{
    // console.log("lll");

    let frdata=document.getElementById("fr").value;
    let lsdata=document.getElementById("ls").value;
    console.log(frdata,lsdata);

    arr.push({
        firstname:frdata,
        lastname:lsdata,
    })
    console.log(arr);
       
    

    event.preventDefault();
}

const handleremove = ()=>{
    console.log("lllll");

    event.preventDefault();
}

const handlereadd=()=>{
    console.log("mmmm");
}

frmref.addEventListener("submit",handlesubmitdata)