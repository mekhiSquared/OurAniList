/** @format */

import NavBar from "../components/NavBar";

import { useParams } from "react-router-dom";

const AllAnimePage = () => {
	const { pageNum } = useParams();

	return (
		<>
			<NavBar />
			<h1>ANIME</h1>
			<p>{pageNum}</p>
		</>
	);
};

export default AllAnimePage;
