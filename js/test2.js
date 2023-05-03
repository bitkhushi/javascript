let formref = document.getElementById("todo-form");
let btn = document.getElementById("btn");

let arr=[];
const handleform = () =>{
    

    let val=document.getElementById("userinput").value;

    // console.log(val);

    arr.push(val);
    // console.log(arr);

    print = '<ul>';
    arr.map((v)=>{
        console.log(v);

        print += '<li>' + v + '<button>' + close + '</button>'+ '</li>';
        document.getElementById("answer").innerHTML=print;
        // console.log(print);
    });

    print += '</ul>';
   


    event.preventDefault();

}
const handleclose=()=>{ 

    // let close1=document.getElementById("ans");
    // console.log(close1);

    arr.splice(arr[1]);
    console.log(arr);
   
    // arr.map((v)=>{
    //     // console.log(v);
    //     arr.pop()
    //     console.log(arr);
    // })

    // let kk = document.getElementById("ans");
    // console.log(kk);
    
}

formref.addEventListener("submit",handleform)
btn.addEventListener("click",handleclose)
















// let arr = [];
// function handleuser() {
  
   
//         let x = document.getElementById("userinput").value;
        
        
//         arr.push(x);
//         console.log(arr.toString());

//         var li = document.createElement('li');
//         li.textContent = arr[x];
//         document.getElementById('userans').appendChild(li);
//         // document.getElementById("userans").innerHTML = li.textContent;
//         event.preventDefault()


    
// }

// function userdelete() {

//     document.getElementById("userans").style.display = 'none';
// }

