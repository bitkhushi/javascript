// const plus = () =>{
//     let x = document.getElementById("pl");
//     let x;


//     for(let x=0; x>0; x++){
//        let y= document.getElementById("ans").innerHTML = x1;
//     }

//     x1++;




// }

// const minus = ()=> {
//     let y=document.getElementById("mi");
//     let y1= 1;
//     --y1;
//     document.getElementById("ans1").innerHTML= y1;
// }

let data = 0;

const plus = () => {

    data = data + 1;
    document.getElementById("ansbox").innerHTML = data;

}

const minus = () => {
    data = data - 1;

    document.getElementById("ansbox").innerHTML = data;
}