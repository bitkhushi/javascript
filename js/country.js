const changecolor=()=> {

    let res=document.getElementById("result").value;
    console.log(res);

    if(res === 'ind'){
        let m=document.getElementById("msg").innerHTML="YOU SELECT INDIA COUNTRY";
        // console.log(m);
        document.getElementById("changebody").style.backgroundColor='red';
    }else if(res === 'can'){
        document.getElementById("msg").innerHTML="YOU SELECT CANADA COUNTRY";
        document.getElementById("changebody").style.backgroundColor='yellow';
    }else if (res === 'ger'){
        document.getElementById("msg").innerHTML="YOU SELECT GERMANY COUNTRY";
        document.getElementById("changebody").style.backgroundColor='purple';
    }
}