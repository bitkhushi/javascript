
function submitdata() {
    let fees = parseInt(document.getElementById("fees").value);
    let cgpa = parseFloat(document.getElementById("cgpa").value);
    let cast = document.getElementById("myinput").value;

    console.log(fees,cgpa,cast);
    // perobc= (fees % 25) *100;
    // persc =(fees % 50) *100;
    // perst=fess;
     let scholarship;
     scholarship = fees*0.25;
    if(cast==='Open'){
        document.getElementById("msg").innerHTML="NO SCHOLARSHIP";
        
    }else if(cast === 'OBC'){
        document.getElementById("msg").innerHTML="YOU WILL BE GET 25% SCHOLARSHIP"
    
    //    document.getElementById("feesmsg").innerHTML=x;
       
    }else if(cast === 'SC'){
        document.getElementById("msg").innerHTML="YOU WILL BE GET 50% SCHOLARSHIP";
    }else if(cast === 'ST'){
        document.getElementById("msg").innerHTML="YOU WILL BE GET FULL SCHOLARSHIP"

    }else if(cgpa >= 9 && cgpa <=10 ){
        alert("YOUR GRADE IS A");

        
    }else if(cgpa >= 8.5 && cgpa <9){
        alert("YOUR GRADE IS B");
    }else if(cgpa >=8 && cgpa < 8.5){
        alert("YOUR GRADE IS C");
    }else if(cgpa >=7.5 && cgpa < 8){
        alert("YOUR GRADE IS D");
    }else if(cgpa <= 7){
        alert("YOU ARE NOT ELIGIBLE FOR SCHOLARSHIP");
    }
    

}



