let formref = document.getElementById("todo-form");

let arr=[];
const handleform = () =>{
    

    let val=document.getElementById("userinput").value;

    // console.log(val);

    arr.push(val);
    // console.log(arr);

    print = '<ul>';
    arr.map((v)=>{
        console.log(v);

        print += '<li>' + v + '</li>';
        document.getElementById("answer").innerHTML=print;
        console.log(print);
    });

    print += '</ul>';
   


    event.preventDefault();
}

formref.addEventListener("submit",handleform)













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

