let tc_s = 1;
let tc_c = 500;
let fl_s = 2;
let fl_c = 1500;
let rct_s = 4;
let rct_c = 2500;
let rct_c_s = 6;
let rct_c_c = 12000;
let br_s = 12;
let br_c = 35000;
let final_t,final_s,final_c;

const displaytreatment = (t, s, c) => {
    document.getElementById("trt").innerHTML = t;
    document.getElementById("st").innerHTML = s;
    document.getElementById("cost").innerHTML = c;

    final_t = t;
    final_s = s;
    final_c = c;

}

const handletreatment = () => {
    // console.log("xxxx");
    let val = document.getElementById("userinput").value;
    console.log(val);

    if (val === 'Tc') {
        displaytreatment('Teeth_Cleaning', tc_s, tc_c);
    } else if (val === 'Fl') {
        displaytreatment('Fillings', fl_s, fl_c);
    } else if (val === 'Rct') {
        displaytreatment('Root Canal Treatment', rct_s, rct_c);
    } else if (val === 'Rct+c') {
        displaytreatment('RCT + Cover', rct_c_s, rct_c_c);
    } else if (val === 'Br') {
        displaytreatment('Braces/Invisalign', br_s, br_c);
    }


    document.getElementById("user").style.display = 'block'
}

const handledate =()=>{
    
    let d =document.getElementById("aptdate").value;
    // console.log(d);

    console.log(d,final_t,final_s,final_c);
    let per_se=final_c/final_s;
    console.log(d,final_t,final_s,final_c,per_se);

   
    for(i=0;i<=final_s;i++){
        let aptdate = new Date(d);
        aptdate.setDate(aptdate.getDate()+7)
        console.log(aptdate); 
    }


}

let dateref=document.getElementById("book");

dateref.addEventListener('click',handledate);