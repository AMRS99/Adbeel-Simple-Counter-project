//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));

let count=0;
setInterval(function(){
    root.render(<Home counter={count}/>);
    count++;
},1000);