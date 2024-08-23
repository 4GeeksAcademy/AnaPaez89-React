import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import pisces from "../../img/pisces.jpg";
import { Navbar } from "./Navbar.jsx";
import { Hero } from "./Hero.jsx";
import { Modal } from "./Modal.jsx";
import { Accordion } from "./Accordion.jsx";
import { BarraProgreso } from "./BarraProgreso.jsx";
import { Footer } from "./Footer.jsx";
import { Tittle } from "./Tittle.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={pisces} />
			</p>
			<Tittle text='React' color='warning'/>
			<Hero />
			<Modal />
			<Accordion />
			<hr />
			<BarraProgreso />
			<hr />
			<Footer />
			
		</div>
	);
};

export default Home;
