let fnameref = document.getElementById("fname");
let lnameref = document.getElementById("lname");
let submitdesc = document.getElementById("submitdesc");
let pass1 = document.getElementById("pass1");
// let pass2=document.getElementById("pass2");
let icon1 = document.getElementById("open");
let icon2 = document.getElementById("close");


function fnameblur() {
    if (fnameref.value === '') {
        document.getElementById("fname").style.borderColor = 'red';
        document.getElementById("msg").innerHTML = "Please Fill The Information"

    } else if (fnameref.value != '') {
        document.getElementById("fname").style.borderColor = 'green';

    }
}
function submitdata() {
    let fnamedata = fnameref.value;
    let lnamedata = fnameref.value;

    if (fnamedata === '' && lnamedata === '') {

        alert("ENTER THE INFORMATION");
    } else if (fnamedata === fnamedata && lnamedata === lnamedata) {
        alert("THANK YOU;)");
    }


}

function keyupfname() {
    let y = fnameref.value;

    if (y === '') {
        document.getElementById("fname").style.borderColor = 'red';


    } else if (y != '') {
        document.getElementById("fname").style.borderColor = 'green';
        document.getElementById("msg").innerHTML = ""

    }


}


function keyuplname() {

    let x = lnameref.value;
    if (x === '') {
        document.getElementById("lname").style.borderColor = 'red';


    } else if (x != '') {
        document.getElementById("lname").style.borderColor = 'green';
        document.getElementById("lmsg").innerHTML = ""

    }


}
function passhandle() {
    if (pass1.value === '') {
        document.getElementById("pass1").style.borderColor = 'red';
        document.getElementById("passmsg").innerHTML = "Please Fill The Information"


    } else if (pass1.value != '') {
        document.getElementById("pass1").style.borderColor = 'green';
        document.getElementById("passmsg").innerHTML = ""

    }
}
function icon() {
    //    let y=pass1.value;
    //    console.log(y);
    if (pass1.type === "password") {
        pass1.type = "text";
        document.getElementById("open").style.display = 'none';
        document.getElementById("close").style.display = "block"
    } else {
        pass1.type = "password";
        document.getElementById("open").style.display = 'block';
        document.getElementById("close").style.display = "none"

    }
}
function passhandlekeyup() {
   
    if (pass1.value === '') {
        document.getElementById("pass1").style.borderColor = 'red';
        document.getElementById("passmsg").innerHTML = "Please Fill The Information"



    } else if (pass1.value != '') {
        document.getElementById("pass1").style.borderColor = 'green';
        document.getElementById("passmsg").innerHTML = ""

    }
}


fnameref.addEventListener('blur', fnameblur);
submitdesc.addEventListener('click', submitdata);
fnameref.addEventListener('keyup', keyupfname);
lnameref.addEventListener('keyup', keyuplname);
pass1.addEventListener('keyup', passhandlekeyup)

pass1.addEventListener('blur', passhandle)
// icon2.addEventListener('change',closeicon);
// icon1.addEventListener('click',openicon);








// --------------------------------------------------------------------


// function lnamefocus() {

//     document.getElementById("lname").style.borderColor = 'blue';

// }
function lnameblur() {
    let z = document.getElementById("lname").value;
    if (z === '') {
        document.getElementById("lmsg").innerHTML = "Please Fill The Information"
        document.getElementById("lname").style.borderColor = 'red';
    } else if (z != '') {

        document.getElementById("lmsg").innerHTML = "";
    }

}
// lnameref.addEventListener('focus', lnamefocus);
lnameref.addEventListener('blur', lnameblur);

// window.onload=function(){
//     let a = document.getElementById("open").style.display='none';
//     let b = document.getElementById("close").style.display='none';

// }





