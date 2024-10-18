//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));

let value="";

function handleChange(e){
    value+=e.target.value;
}
const handleClick =() =>{
    let countDown = parseInt(value);
    clearInterval(myInterval);
    setInterval(function(){
        root.render(<Home counter={countDown} myButton = {handleClick} myInput= {handleChange}/>);
        console.log(value);
        countDown--;
    },1000)
}

let count=0;
let myInterval=setInterval(function(){
    root.render(<Home counter={count}/>);
    count++;
},1000);