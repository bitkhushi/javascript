
function handledata() {
  

    let userinput = document.getElementById("userinput").value;
    console.log(userinput);




    if (userinput === 'Teeth Cleaning') {
        let s1 = 1;
        let c1 = 500;

        document.getElementById("trt").innerHTML = userinput;
        document.getElementById("seat").innerHTML = s1;
        document.getElementById("cos").innerHTML = c1;

    } else if (userinput === 'Fillings') {
        let s2 = 2;
        let c2 = 1500;
        document.getElementById("trt").innerHTML = userinput;
        document.getElementById("seat").innerHTML = s2;
        document.getElementById("cos").innerHTML = c2;


    } else if (userinput === 'Root Canal Treatment') {
        let s3 = 4;
        let c3 = 2500;
        document.getElementById("trt").innerHTML = userinput;
        document.getElementById("seat").innerHTML = s3;
        document.getElementById("cos").innerHTML = c3;


    } else if (userinput === 'RCT + Cover') {
        let s4 = 6;
        let c4 = 12000;
        document.getElementById("trt").innerHTML = userinput;
        document.getElementById("seat").innerHTML = s4;
        document.getElementById("cos").innerHTML = c4;


    } else if (userinput === 'Braces/Invisalign') {
        let s5 = 12;
        let c5 = 35000;
        document.getElementById("trt").innerHTML = userinput;
        document.getElementById("seat").innerHTML = s5;
        document.getElementById("cos").innerHTML = c5;
    }


    document.getElementById("trtdatatable").style.display = 'block';
    document.getElementById("dates").style.display = 'block';
    // 


}
function bookapt() {
    document.getElementById("tbl").style.display='block';

    let v = document.getElementById("dates").value;
    console.log(v);
    
    let inputdate = new Date(v);
    console.log(inputdate);

    let newDate = new Date(inputdate.getTime() + 7 * 24 * 60 * 60 * 1000);
    document.getElementById("datetbl").innerHTML=v;
    document.getElementById("datetbl").innerHTML=newDate;
    document.getElementById("charge").innerHTML = c1;


    console.log(newDate.toLocaleDateString());

    if(userinput === 'Teeth Cleaning'){
        let newDate = new Date(inputdate.getTime() + 7 * 24 * 60 * 60 * 1000);
        document.getElementById("datetbl").innerHTML=v;
        document.getElementById("datetbl2").innerHTML=newDate;

    }
   


}