/** @format */

import NavBar from "../components/NavBar";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

import { useParams } from "react-router-dom";

const AllAnimePage = () => {
	const { pageNum } = useParams();
	const { setActive } = useContext(AnimeContext);

	useEffect(() => {
		setActive("all");
	});

	return (
		<>
			<NavBar />
			<h1>ANIME</h1>
			<p>{pageNum}</p>
		</>
	);
};

export default AllAnimePage;
