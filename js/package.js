const package = (tour, tourpa) =>{
    let y=20000;
    let z = 10000;
    let m = ("Goa pacakge price is :" + y + "Bali pacakge price is :" + z);

    if(tour == "goa"){
        console.log();
    }else if(tourpa == "bali"){
        console.log("Bali pacakge price is :"+z);
    }
    
    return m;
  
}

const x = package("goa","bali");
console.log(x);