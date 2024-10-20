//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));

let count=0;
let myIntervalini;
let myIntervalStop;

const handleClick = () =>{
    let value = document.getElementById("myInput").value;
    let countDown = parseInt(value);

    document.getElementById("myInput").value = null;
    console.log(value);
    clearInterval(myIntervalini);

    let myIntervalCountdown=setInterval(function(){
        root.render(<Home counter={countDown} />);
        countDown--;
        if(countDown==-1)
            clearInterval(myIntervalCountdown);
    },1000)
}

const handleClickStop = () => {
    clearInterval(myIntervalini);
    clearInterval(myIntervalStop);
}


const handleClickStart = () =>{
    myIntervalStop=setInterval(Counter,1000);
}

const handleClickRestart = () =>{
    count=0;
}

function Counter(){
    root.render(<Home counter={count} myButton={handleClick} buttonStart={handleClickStart} buttonStop={handleClickStop} buttonRestart={handleClickRestart}/>);
    document.getElementById("alert").className ="alert invisible alert-warning alert-dismissible fade show";
    count++;
    ShowAlarm();
}

function ShowAlarm(){
    if(document.getElementById("alarm")!=null){
        let alarmInput=document.getElementById("alarm").value;
        if(parseInt(alarmInput)==count-1)
            document.getElementById("alert").className ="alert alert-warning alert-dismissible fade show";
    }
}

myIntervalini=setInterval(function(){
    root.render(<Home counter={count} myButton={handleClick} buttonStart={handleClickStart} buttonStop={handleClickStop} buttonRestart={handleClickRestart}/>);
    document.getElementById("alert").className ="alert invisible alert-warning alert-dismissible fade show";
    count++;
    ShowAlarm();
},1000);