/** @format */
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const AnimeSpecsPage = () => {
	return (
		<>
			<NavBar />
			<p>Anime Specs {`id: ${useParams().id}`}</p>
		</>
	);
};

export default AnimeSpecsPage;
