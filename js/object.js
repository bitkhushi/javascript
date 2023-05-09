
// let person = {

//     name: "amit",
//     age: 25 
// }

// for(let k in person){
//     console.log(person[k]);
// }

// console.log(person.name);



// const person = [
//     {
//         name: "amit",
//         age: 25 ,
//     },
//     {
//         name: "piyush",
//         age: 25 , 
//     }


// ];

// // console.log(person);
// person.map((v,i)=> console.log(v.name));

// const person = [
//     {
//         name: "amit",
//         age: 25 ,

//     course : [
//         "c",
//         "html",

//     ]

//     }

// ];

// person.map((t)=>{

//     console.log(t.name,t.age );
//     t.course.map((p1)=>{
//         console.log(p1);
//     })
// })


// const myObj = {

//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for (let k in myObj){
//     if(k === 'cars'){
//         for(let j in myObj[k]){
//             console.log(myObj[k][j]);
//         }
//     }else{
//         console.log(myObj[k]);
//     }
// }

// console.log(myObj.name, myObj.age);

// console.log(myObj.cars.car2);


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:{
//             "c",
//             "html"
//         }
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:{
//             "c",
//             "html"
//         }
//     }
// ];
// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             a: "c",
//             b: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             a: "c",
//             b: "html"
//         }
//     }
// ];

// person.map((t) => {
//     console.log(t.name,t.age);
//     console.log(t.course.a);

// })



let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}

for (let k in data) {
    // console.log(data[k]);
    if (k === 'personal_info') {
        console.log(data[k].name, data[k].age, data[k].city);
    } else if (k === 'courses') {
        data[k].map((j) => {
            console.log(j);
        })
    } else if (k === 'branches') {
        for (let x in data[k]) {
            console.log(data[k][x].admission, data[k][x].vacant_seat);
        }
    }
}


// console.log(data.personal_info.name);
// console.log(data.branches);
// console.log(data.courses);
// console.log(data.branches.b1.admission);

// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];


// person.map((v) => {
//     console.log(v.name, v.age);
//     for (let x in v.course) {
//         console.log(v.course[x]);
//     }

// });



