import React from "react";

import SecondsCounter from "./SecondsCounter";

//create your first component
function eachSeconds(counter,place){
	return Math.floor(counter/place)%10;
}

const Home = (props) => {
	return (
		<div className="row">
			<div className="col-2"></div>
			<div className="col-8">
				<SecondsCounter 
				sixthSeconds = {eachSeconds(props.counter,100000)}
				fifthSeconds = {eachSeconds(props.counter,10000)}
				fourthSeconds = {eachSeconds(props.counter,1000)}
				thirdSeconds = {eachSeconds(props.counter,100)}
				secondSeconds = {eachSeconds(props.counter,10)}
				firstSeconds = {eachSeconds(props.counter,1)} 
				myButton = {props.myButton}
				myInput = {props.myInput}
			   />
			</div>
			<div className="col-2"></div>
		</div>
	);
};

export default Home;
