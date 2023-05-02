// let arr1 = [12,45,88,75,60,4,1];


// const splitarray = (arr) =>{
//     let a1 = []
//     let a2 = []

//     arr.map((a)=>{
//         if(a>50){
//             a1.push(a);
//         }else{
//             a2.push(a)
//         }
//     })

//     console.log(a1);
//     console.log(a2);

// }

// splitarray(arr1);

// let arr2 = [12,50,60,85,'amit','apple','khushi']

// const splitarray = (arr1) =>{
//     let a1 = []
//     let a2 = []

//     arr1.map((a)=>{
//         if(typeof a === 'number'){
//             a1.push(a);
//         }else{
//             a2.push(a);
//         }
//     })
//     console.log(a1);
//     console.log(a2);

// }



// splitarray(arr2);

// let arr3=[12,66,88,99,44,55]

// const rotatearr = (a , ind) =>{

//     let a1 = a.slice(0, ind);
//     let a2 = a.slice(ind);

//     console.log(a1);
//     console.log(a2);

//     let ans = a1.concat(a2)
//     console.log(ans);






// }


// rotatearr(arr3 , 3)

// let arr4 = [22, 88, 99, 77, 55, 33, 77]

// const sortspe = (a, ind) => {



//     let uniq = [];

//     arr4.map((a) => {
//         if (!uniq.includes(a)) {
//             uniq.push(a);
//         }
//     });
//     let sorta = uniq.sort((a, b) => b - a);

//     console.log(sorta[ind - 1],uniq);




// }

// sortspe(arr4, 4)

// let arr4 = [22, 88, 99, 77, 55, 33, 77]

// const sortspe = (a, ind) => {



//     let uniq = [];

//     arr4.map((a) => {
//         if (!uniq.includes(a)) {
//             uniq.push(a);
//         }
//     });
//     let sorta = uniq.sort((a, b) => a - b);

//     console.log(sorta[ind-1],uniq);




// }

// sortspe(arr4, 4)

// let a1 = [10, 20, 30, 40, 50]
// let a2 = [10, 20, 35, 40, 50]

// const equalarr = (a, b) => {

//     console.log(a.length);
//     console.log(b.length);
//     // flag==0

//     if (a.length === b.length) {
//         let i;
//         let flag=0;
//         for (let i = 0; i < a.length; i++) {

//                 if (a[i] !== b[i] ) {
//                     flag = 1;
//                     break;
//                 }


//         }

//         if(a[i] === b[i]){
//             console.log("Array are equal");
//         }else{
//             console.log('array are not equal');

//         }
//     } else {
//         console.log('array are not equal');
//     }
//  }



// equalarr(a1, a2)

let arr = [10, 20, 60, 41]

const median = (a) => {

    let sortA = a.sort((a, b) => a - b);
    console.log(sortA);


    let i = Math.floor(sortA.length / 2);
    if (sortA.lenght %2 === 0) {

        console.log(sortA[i]);
        console.log(sortA[i-1]);
        // console.log(i);
        // let answer = (sortA[i] + sortA[i - 1]) / 2;
        // console.log(answer);

    } else {
        console.log(sortA[i]);
    }


}


median(arr);







