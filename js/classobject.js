class Buliding {

    constructor(l,w){

        this.length=l;
        this.width=w;
    }

    area(){
        let ans=this.length* this.width;
        console.log("area is: " + ans);
    }
    estimation(m){
        console.log(m + " Months ");
    }
}

const b1=new Buliding(100,200);
b1.area();
b1.estimation(6);

const b2=new Buliding(600,200);
b2.area();
b2.estimation(8);