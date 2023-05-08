
let h1elem  =document.createElement("h1");
let h1txtelem = document.createTextNode("HELLOOOO");

h1elem.appendChild(h1txtelem);

let demoref = document.getElementById("demo");


demoref.appendChild(h1elem);

let aelem = document.createElement("a");
let atxtelem = document.createTextNode("HELLOOOO");
aelem.setAttribute("href" , "#");
aelem.setAttribute("onclick","handlelink()");
aelem.setAttribute("id" , "link");


aelem.appendChild(atxtelem);
demoref = document.getElementById("demo");

demoref.appendChild(aelem);

const handlelink = ()=>{
    console.log("onclick");
}
