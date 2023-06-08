const validateForm =()=>{
    console.log("kkkkkk");

    let nameval=contactForm.name.value;
    let emailval=contactForm.email.value;
    let mobilenum=contactForm.mobile.value;
    let country=contactForm.country.value;
    let gender=contactForm.gender.value;
    let hobby=contactForm.hobbies.value;
 
    console.log(hobby);
    console.log(gender);
    
    if(nameval===''){
        document.getElementById("nameErr").innerHTML="Please Enter Name";

    }else{

        let regex = /^[a-zA-Z ]{2,30}$/;
        if(regex.test(nameval)){
            document.getElementById("nameErr").innerHTML="";

        }else{
            document.getElementById("nameErr").innerHTML="Please Enter valid Name";

        }

 
    }
    // -------------------------------------------------------------------------

    if(emailval===''){
        document.getElementById("emailErr").innerHTML="Please Enter Email";

    }else{

       let emilregx= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       if(emilregx.test(emailval)){
        document.getElementById("emailErr").innerHTML="";

       }else{
        document.getElementById("emailErr").innerHTML="Please Enter Valid Email";

       }
       
 
    }
    // -------------------------------------------------------------------------

    if(mobilenum===''){
        document.getElementById("mobileErr").innerHTML="Please Enter MobileNumber";

    }else{

       
        let IndNum= /^\d{10}$/;

        if(IndNum.test(mobilenum)){
            document.getElementById("mobileErr").innerHTML="";

        }else{
            document.getElementById("mobileErr").innerHTML="Please Enter Valid MobileNumber";

        }

 
    }
    // ------------------------------------------------------------------------------------------

    if(country==='0'){
        document.getElementById("countryErr").innerHTML="Please Select Country";

    }else{
        document.getElementById("countryErr").innerHTML="";

    }

    // --------------------------------------------------------------------------------------------------

    if(gender===''){
        document.getElementById("genderErr").innerHTML="Please Select Gender";

    }else{
        document.getElementById("genderErr").innerHTML="";

    }







    return false;
}