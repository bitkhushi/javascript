
function submitdata() {
    let fees = parseInt(document.getElementById("fees").value);
    let cgpa = parseFloat(document.getElementById("cgpa").value);
    let cast = document.getElementById("myinput").value;
    let grade;
    let answer;
    let scholarship;
    console.log(fees, cgpa, cast);
   

    if ((cgpa >= 9 && cgpa <= 10)) {
        grade = "A";
       

    } else if (cgpa >= 8.5 && cgpa < 9) {
         grade = "B";
        
    } else if (cgpa >= 8 && cgpa < 8.5)  {

        grade = "C";
    } else if (cgpa >= 7.5 && cgpa < 8)  {

        grade = "D";
    } else if (cgpa <= 7) {
        
        alert("YOU ARE NOT ELIGIBLE FOR SCHOLARSHIP");
        document.getElementById("msg").style.display='none';

    }else{}

    if(cgpa >=8.5){
        if(cast==='Open'){
            
            document.getElementById("feesmsg").innerHTML="you are not eligible for scholarship";
            document.getElementById("msg").style.display='none'
        
        }else if(cast==='OBC'){
            answer=fees*0.25;
		    scholarship=fees-answer;
           
        }else if(cast==='SC'){
            answer=fees*0.50;
		    scholarship=fees-answer;
            
        }else if(cast==='ST'){ answer=fees*0.50;
		    scholarship=fees;
          
        }else{}
    }

    document.getElementById("msg").innerHTML=" YOUR GRADE IS :  " + grade + " " +"  YOU WILL GET  " + answer + "  scholarship  " + " You have to pay " + scholarship;
}



