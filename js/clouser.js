// let city='baroda'

// const printcity = () => {
//     console.log(city);
// }

// printcity();

// city='Vapi';
// printcity();

// city='Surat';
// printcity();


// let name="amit"; // Globle Variable

// const info = (salary) => { //Outer Function //2
//     let age= 25; //Outer Function's Variable


//     // Inner Function
//     return function printinfo() {  //3
//         console.log(name);
//         console.log(age);
//         console.log(salary);
//     }

// }

// let res = info(50000); // Outer Function Call  //1 //4
// res();// Inner Function Call //5



// const handlecounter=()=>{
//     let count=0;

//     return function countop() {
//         count++;
//         console.log(count);
//     }
// }

//  let res=handlecounter();
// res();
// res();

// let res1=handlecounter();
// res1();
// res1();



const handle = () => { //2
    let count = 0;

    return function op() { //3
        count=count+1;
        console.log(count);
    }

    
}

let res = handle(); //1 //4
console.log(res);
res();
res();







