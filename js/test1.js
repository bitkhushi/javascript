// const colchange = (colors) => {

//     if (colors === 'INDIA') {
//         let y = document.getElementById("ind").innerHTML.style.backgroundcolor = "red";
//         return y;

//     } else if (colors === 'USA') {
//         let x = document.getElementById("us").style.backgroundcolor = "yellow";
//         return x;

//     } else if (colors === 'CANADA') {
//         let z = document.getElementById("can").style.backgroundcolor = "orange" ;
//         return z;
//     }


// }

// const colorchange = (t1, t2, t3) => {

//     // let m1=document.getElementById("ind").value;
//     // let bc = style.backgroundcolor = "red";

//     // document.getElementById("ind").innerHTML = bc;


//     let msg = document.getElementById("myselect").value;
//     let m = document.getElementById("msg").innerHTML = " you selected " + msg;

//     let c1 = colchange(t1);
//     let c2 = colchange(t2);
//     let c3 = colchange(t3);


//     let  ms = " YOU SELECTED " + c1 + " country. " + " YOU SELECTED " + c2 + " country. " + " YOU SELECTED " + c3 + " country. "
//     return ms;
// }


// const colorchange = () => {

//     let c1 = document.getElementById("ind").value;
//     let c2 = document.getElementById("us").value;
//     let c3 = document.getElementById("can").value;

//     if(c1 === 'INDIA'){
//        let z= document.getElementById("ind").innerHTML.style.backgroundcolor = "red"
//     }

//     let msg = document.getElementById("myselect").value;
//     let m = document.getElementById("msg").innerHTML = " you selected " + msg;



//     return m;
// }

//  let y= colorchange("INDIA","USA","CANADA")
//  console.log(y);



const colorchange = () => {

    let x = document.getElementById("ind").value;
    let a = document.getElementById("us").value;
    let b = document.getElementById("can").value;

    let y=document.getElementById("myselect").value;
    console.log(y);

    if (y === 'INDIA') {

        document.getElementById("change").style.backgroundColor = "orange";
        let m = document.getElementById("msg").innerHTML = "YOU SELECTED INDIA COUNTRY";

    } else if (y === 'USA') {

        document.getElementById("change").style.backgroundColor = "red";
        let ms = document.getElementById("msg").innerHTML = "YOU SELECTED USA COUNTRY";
    } else if (y === 'CANADA') {

        document.getElementById("change").style.backgroundColor = "pink";
        let msg = document.getElementById("msg").innerHTML = "YOU SELECTED CANADA COUNTRY";

    }

    // console.log(m,ms,msg);
}

