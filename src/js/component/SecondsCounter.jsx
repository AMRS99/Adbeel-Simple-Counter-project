import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) =>{

    return(
        <>
            <div className="bg-dark d-flex justify-content-center mt-3 flex-nowrap">
                <div className="clock text-white my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                    </svg>
                </div>
                <div className="second text-white p-3"><h1>{props.sixthSeconds}</h1></div>
                <div className="second text-white p-3"><h1>{props.fifthSeconds}</h1></div>
                <div className="second text-white p-3"><h1>{props.fourthSeconds}</h1></div>
                <div className="second text-white p-3"><h1>{props.thirdSeconds}</h1></div>
                <div className="second text-white p-3"><h1>{props.secondSeconds}</h1></div>
                <div className="second text-white p-3"><h1>{props.firstSeconds}</h1></div>
            </div>

            <div className="d-flex mt-3">
                <input id="myInput" type="text" className="form-control" placeholder="Countdown" aria-label="Username" aria-describedby="basic-addon1"/>
                <button onClick={()=>{props.myButton()}} type="button" className="btn btn-primary">Start Countdown</button>               
            </div>

            <div className="d-flex mt-3">
                <button onClick={()=>{props.buttonStart()}} type="button" className="btn btn-primary">Resume</button>
                <button onClick={()=>{props.buttonStop()}} type="button" className="btn btn-danger">Stop</button>   
                <button onClick={()=>{props.buttonRestart()}} type="button" className="btn btn-warning">Restart</button>              
            </div>

            <div className="d-flex mt-3">
                <input id="alarm" type="text" className="form-control" placeholder="Alarm" aria-label="Username" aria-describedby="basic-addon1"/>          
            </div>

            <div id="alert" className="alert invisible alert-warning alert-dismissible fade show" role="alert">
                <strong>It's time</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

        </>
    );
}

SecondsCounter.propTypes ={
	sixthSeconds : PropTypes.number,
	fifthSeconds : PropTypes.number,
	fourthSeconds : PropTypes.number,
	thirdthSeconds : PropTypes.number,
	secondSeconds : PropTypes.number,
	firstSeconds : PropTypes.number
}

export default SecondsCounter;