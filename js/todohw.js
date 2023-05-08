// let frmref = document.getElementById("todo-form");

// let arr = [];
// uid = null;
// update = false;
// const handleinsert = () => {

//     let val = document.getElementById("data").value;

//     arr.push(val);
//     // console.log(arr);
//     document.getElementById("data").value='';

//     handledisplay();

//     event.preventDefault();
// }

// const handledisplay = () => {

//     print = '<ul>'

//     arr.map((v, i) => {
//         console.log(v);

//         print += '<li>' + v + '<button onclick="handleremove(' + i + ')">x</button>' +'<button onclick="handleupdate(' + i + ')">u</button>'+ '</li>';

//     });

//     print += '</ul>';
//     document.getElementById("answer").innerHTML = print;


//     event.preventDefault();
// }

// const handleremove = (i) => {

//     arr.splice(i, 1);
//     console.log(arr);
//     handledisplay();


// }

// const handleupdate=(i)=>{

//     update = true;

//     console.log(arr[i]);

//     uid=i;
//     document.getElementById("data").value=arr[i];

//     event.preventDefault();

// }

// const handleupdatedata = () =>{
//     console.log("update function call");

//     let newval=document.getElementById("data").value;
    
   
//     arr[uid]=newval;
    
//     // handledisplay();
//     document.getElementById("data").value='';

//     handledisplay();
//     event.preventDefault();
// }

// const handledes=()=>{

//         if(update){
//             handleupdatedata();
//         }else{
//             handleinsert();
//         }
    
//         event.preventDefault();



// }


// frmref.addEventListener("submit", handledes)


let frmref = document.getElementById("todo-form");

let arr = [];
const handleinsert = ()=> {

    let val = document.getElementById("data").value;
    arr.push(val);
    // console.log(arr);


    event.preventDefault();
    handleprint();
}

const handleprint = ()=>{

    
        

        print = '<ul>'
        arr.map((v,i)=>{

            print += '<li>'+v+'</li>';

        
        });    

        print += '</ul>'
        document.getElementById("answer").innerHTML=print;
  

   
        event.preventDefault();

}



frmref.addEventListener("submit",handleinsert)
