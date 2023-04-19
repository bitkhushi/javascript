let fnameref = document.getElementById("fname");
let lnameref = document.getElementById("lname");
let submitdesc = document.getElementById("submitdesc");

function fnamefocus() {

    // document.getElementById("fname").style.borderColor = 'blue';


}
// function fnameblur() {
//     let m = document.getElementById("fname").value;
//     if (m === '') {
//         document.getElementById("msg").innerHTML = "Please Fill The Information"
//         document.getElementById("fname").style.borderColor = 'red';
//     } else if (m != '') {
//         document.getElementById("fname").style.borderColor = 'grey';

//         document.getElementById("msg").innerHTML = "";
//     }

// }
function fnameblur() {
    if (fnameref.value === '') {
        document.getElementById("fname").style.borderColor = 'red';
        document.getElementById("msg").innerHTML = "Please Fill The Information"

    }else if(fnameref.value != ''){
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
        document.getElementById("msg").innerHTML = ""
        document.getElementById("fname").style.borderColor = 'red';


    } else if (y != '') {
        document.getElementById("fname").style.borderColor = 'green';

    }


}
function keyuplname() {

    let x = lnameref.value;
    if (x === '') {
        document.getElementById("msg").innerHTML = ""
        document.getElementById("fname").style.borderColor = 'red';


    } else if (x != '') {
        document.getElementById("fname").style.borderColor = 'green';

    }


}
// fnameref.addEventListener('focus', fnamefocus);
fnameref.addEventListener('blur', fnameblur);
submitdesc.addEventListener('click', submitdata);
fnameref.addEventListener('keyup', keyupfname);
lnameref.addEventListener('keyup', keyuplname)









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





