let frmref=document.getElementById("frmref");

let btnref = document.getElementById("btnref");

let arr=[];

const handleinput=()=>{

    let frmref=document.getElementById("frmref");


    let intagfr = document.createElement("input");
    intagfr.setAttribute("type" , "text");
    intagfr.setAttribute("placeholder","ENTER FIRST NAME");

    let intagls = document.createElement("input");
    intagls.setAttribute("type" , "text");
    intagls.setAttribute("placeholder","ENTER LAST NAME");

    // let frlsname=document.getElementById("frmref");

    frmref.appendChild(intagfr);
    frmref.appendChild(intagls);

    let addbtn=document.createElement("button");
    let removebtn=document.createElement("button");

    let addtxt=document.createTextNode("+");
    let removetxt=document.createTextNode("-");

    let buttons=document.getElementById("frmref");

    // frmref.appendChild(addbtn);
    // frmref.appendChild(removebtn);
    addbtn.setAttribute("onclick" ," hanldeplus()")

    removebtn.setAttribute("onclick" ," handleremove()")


    addbtn.appendChild(addtxt);
    removebtn.appendChild(removetxt);
    buttons.appendChild(addbtn);
    buttons.appendChild(removebtn);


    let br = document.createElement("br");
    frmref.appendChild(br);

    let rno = Math.floor(Math.random() * 100);
    console.log(rno);

    frlsname.setAttribute("id" , "remove" + rno);



//    let brk=document.getElementById("frlsname");


    event.preventDefault();


}
const hanldeplus=()=>{
    // console.log("lll111");
    handleinput();
    event.preventDefault();
}
const handleremove=(rno)=>{
    console.log("llll");
    event.preventDefault();
    
}

const hanldeinsert=()=>{

    let frname=document.getElementById("frname").value;
    let lsname=document.getElementById("lsname").value;

    console.log(frname,lsname);

    arr.push({
        firstname:frname,
        lastname:lsname,
        });

    console.log(arr);

    event.preventDefault();
   
}



btnref.addEventListener("click",handleinput);
frmref.addEventListener("submit",hanldeinsert)
