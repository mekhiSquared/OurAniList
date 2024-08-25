/** @format */
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

const HomePage = () => {
	const { setActive } = useContext(AnimeContext);

	useEffect(() => {
		setActive("home");
	});
	return (
		<>
			<section id='homepageBkg'>
				<NavBar />
				<img
					id='logo'
					src={logo}
					alt='logo'
					srcSet=''
				/>
			</section>
		</>
	);
};

export default HomePage;
