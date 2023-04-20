let pass1= document.getElementById("pass1");
let pass2=document.getElementById("pass2");
let icon1=document.getElementById("open");
let icon2=document.getElementById("close");

function icon(){
//    let y=pass1.value;
//    console.log(y);
   if(pass1.type === "password"){
    pass1.type = "text";
    document.getElementById("open").style.display='none';
    document.getElementById("close").style.display="block"
   }else {
    pass1.type ="password";
    document.getElementById("open").style.display='none';
    document.getElementById("close").style.display="block"

   }
}

// function closeicon() {
//     if(pass1.type === "password"){
        
        
//     }
// }






// icon2.addEventListener('change',closeicon)
// icon1.addEventListener('click',icon)