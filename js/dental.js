
function handledata() {
    // let tc,fl,rct,rcc,bi;




    let userinput = document.getElementById("userinput").value;
    console.log(userinput);




}
function submitdata() {









    // let tc = document.getElementById("tc").value;
    // let fl = document.getElementById("fl").value;
    // let rct = document.getElementById("rct").value;
    // let rcc = document.getElementById("rcc").value;
    // let bi = document.getElementById("bi").value;
    if (userinput === 'Teeth_Cleaning') {
        let s1 = 1;
        let c1 = 500;
        
        document.getElementById("trt").innerHTML = tc;
        document.getElementById("seat").innerHTML = s1;
        document.getElementById("cos").innerHTML = c1;
        // console.log(tc);
    } else if (userinput === 'Fillings') {
        let s2 = 2;
        let c2 = 1500;
        document.getElementById("trt").innerHTML = fl;
        document.getElementById("seat").innerHTML = s2;
        document.getElementById("cos").innerHTML = c2;
    } else if (userinput === 'Root_Canal_Treatment') {
        let s3 = 4;
        let c3 = 2500;
        document.getElementById("trt").innerHTML = rct;
        document.getElementById("seat").innerHTML = s3;
        document.getElementById("cos").innerHTML = c3;
    } else if (userinput === 'RCT + Cover') {
        let s4 = 6;
        let c4 = 12000;
        document.getElementById("trt").innerHTML = rcc;
        document.getElementById("seat").innerHTML = s4;
        document.getElementById("cos").innerHTML = c4;
    } else if (userinput === 'Braces/Invisalign') {
        let s5 = 12;
        let c5 = 35000;
        document.getElementById("trt").innerHTML = bi;
        document.getElementById("seat").innerHTML = s5;
        document.getElementById("cos").innerHTML = c5;
    }
} 
