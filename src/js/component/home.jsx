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

		// const [hiddenPurple, setHiddenPurple] = useState (false);
		// console.log(hiddenPurple);
		// const hidden = () =>{
		// 	setHiddenPurple(true);
		// 	console.log(hiddenPurple);
		// }



	
	return(
	<main>

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

				 {/* <div className="purple visually-hidden" 
				style={{display : hidden === false ? "none" : "inline-block",
					backgroundColor: "purple", boxShadow: "0 0 20px 10px whitesmoke"}}
				onClick={() => hidden("purple")}>
				</div>  */}
			</div>

		</div>

		{/* <div className="button-purple">
			<button type="button" className=" purple btn btn-warning" onClick={() => setHiddenPurple ()}>Purple</button>
		</div> */}

		<div className="button-active">
			<button type="button" className=" active btn btn-info" onClick={() => setActive (!active)}>Auto</button>
		</div>

	
	
	</main>



	);
}

export default Home
	
