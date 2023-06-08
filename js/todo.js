let formref = document.getElementById("todo-form");

let arr = [];
let update = false;
let updateid = null;

const handleinsert = () => {

    console.log("insert call");

    let val = document.getElementById("userinput").value;

    console.log(val);
    let localdata = JSON.parse(localStorage.getItem("todoarr"));


    if (localdata) {
        localdata.push(val);
        localStorage.setItem("todoarr", JSON.stringify(localdata));
       
    } else {
        arr.push(val);
        localStorage.setItem("todoarr", JSON.stringify(arr));
        
    }

    document.getElementById("userinput").value = '';

    handleprint();



    event.preventDefault();
}
const handleprint = () => {

    let localdata = JSON.parse(localStorage.getItem("todoarr"));
    if(localdata){
        print = '<ul>';
        localdata.map((v, i) => {
            
            console.log(v);
    
            print += '<li>' + v + '<button onclick="handleremove(' + i + ')">x</button>' + '<button onclick="handleupdate(' + i + ')">u</button>' + '</li>';
    
            // console.log(print);
        });
    
        print += '</ul>';
        document.getElementById("answer").innerHTML = print;  
    }else{}
    event.preventDefault();

}

const handleremove = (i) => {

    let localdata = JSON.parse(localStorage.getItem("todoarr"));


    localdata.splice(i, 1);
    localStorage.setItem("todoarr", JSON.stringify(localdata));

    console.log(arr);
    handleprint();  
}

const handleupdate = (i) => {
    
    update = true;

    let localdata = JSON.parse(localStorage.getItem("todoarr"));


    console.log(localdata[i]);

    updateid = i;

    document.getElementById("userinput").value = localdata[i];
    event.preventDefault();
   
}

const handleupdatedata = () => {

    let localdata = JSON.parse(localStorage.getItem("todoarr"));


    console.log("upadted function call");


    let newval = document.getElementById("userinput").value;

    localdata[updateid] = newval;
   

    update = false;
    localStorage.setItem("todoarr", JSON.stringify(localdata));

    document.getElementById("userinput").value = '';
    handleprint();

    event.preventDefault();


}

const handledes = (i) => {


    if (update) {
        handleupdatedata();
    } else {
        handleinsert();
    }

    event.preventDefault();

}

formref.addEventListener("submit", handledes);
window.onload = handleprint;












