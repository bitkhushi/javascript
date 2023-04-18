
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

