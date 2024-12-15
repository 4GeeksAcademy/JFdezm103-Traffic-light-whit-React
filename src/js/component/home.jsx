import React, {useEffect, useState} from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [select, setSelect] = useState('red');
	const [active, setActive] = useState (false);

	const changeColor = (color) => {
	setSelect(color)
	// console.log(color)
	}

	useEffect(() => {
		let interval;
		if(active){
		interval = setInterval (() => {
			if(select === "red"){
					setSelect("yellow");
				} else if (select == "yellow"){
					setSelect("green");
				} else if (select == "green"){
					setSelect("red");
				}
			
			},1000);
			
		} return () => clearInterval(interval);
	} , [active,select]);


	
	return(
	<>

		<div className="traffic">

			<div className="container text-center rounded-3 mt-5 py-2">
			
				<div className= {`red ${select == "red" ? "light-red" : ""}`}
				onClick={() => changeColor("red")}>
				</div>
			
				<div className= {`yellow ${select == "yellow" ? "light-yellow" : ""}`}
				 onClick={() => changeColor("yellow")}>
				</div>

				<div className= {`green ${select == "green" ? "light-green" : ""}`}
				onClick={() => changeColor("green")}>
				</div>
			</div>

		</div>
		
		<div className="buttons">

		<button type="button" className="btn btn-info" onClick={() => setActive (!active)}>Active</button>

		</div>

	
	
	</>



	);
}

export default Home
	
