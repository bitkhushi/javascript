const costing = (dest) => { //4
    if (dest === 'goa') {
        return 35000; //5
    } else if (dest === 'bali') {
        return 45000;
    }

}

const packages = (dest1, dest2) => { //2
    let c1 = costing(dest1); //3 //6
    let c2 = costing(dest2);

    let msg = dest1 + " cost You  " + c1 + " and " + dest2 + " cost you " + c2; //7

    return msg;  //8
}

let ans = packages("bali", "goa"); //1  //9
console.log(ans);  //10