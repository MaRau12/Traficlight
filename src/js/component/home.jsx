import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Lights } from "./lights.jsx";
//create your first component
const Home = () => {
	return (
		<div className="box">
         <Lights/>
		</div>
	);
};

export default Home;
