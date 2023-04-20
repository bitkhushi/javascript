function submitdata(){
    let tex=parseInt(document.getElementById("tex").value);
    let amount;
    console.log(tex);

   if(tex <=30000){
    tax=0;
    document.getElementById("msg").innerHTML=tax;
    parseInt(document.getElementById("one").innerHTML=amount);


   }else if(tex > 300000 && tex <=600000){
    amount=(tex-300000)*0.05;
    parseInt(document.getElementById("msg").innerHTML=amount);
    parseInt(document.getElementById("two").innerHTML=amount);

    console.log(amount);

   }else if(tex > 600000 && tex <=900000){
    amount=(300000*0.05)+((tex-600000)*0.10);
    parseInt(document.getElementById("msg").innerHTML=amount);
    parseInt(document.getElementById("three").innerHTML=amount);


   }else if(tex>900000 && tex<=1200000){
    amount=(300000*0.05)+(300000*0.10)+((tex-900000)*0.15);
    parseInt(document.getElementById("msg").innerHTML=amount);
    parseInt(document.getElementById("four").innerHTML=amount);


   }else if(tex >1200000 && tex<=1500000){
    amount=(300000*0.05)+(300000*0.10)+(300000*0.15)+((tex-1200000)*0.20);
    parseInt(document.getElementById("msg").innerHTML=amount);
    parseInt(document.getElementById("five").innerHTML=amount);


   }else if(tex > 1500000){
    amount=(300000*0.05)+(300000*0.10)+(300000*0.15)+(300000*0.20)+((tex-1500000)*0.30);
    parseInt(document.getElementById("msg").innerHTML=amount);
    parseInt(document.getElementById("six").innerHTML=amount);

                                                                
   }else{

   }








}