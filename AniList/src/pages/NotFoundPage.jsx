/** @format */
import NavBar from "../components/NavBar";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

const NotFoundPage = () => {
	const { setActive } = useContext(AnimeContext);

	useEffect(() => {
		setActive(null);
	});

	return (
		<>
			<NavBar />
			<h1 style={{ marginTop: "10rem" }}>Page not Found</h1>
		</>
	);
};

export default NotFoundPage;
