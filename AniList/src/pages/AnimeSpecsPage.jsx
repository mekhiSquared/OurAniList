/** @format */
import { useParams } from "react-router-dom";

const AnimeSpecsPage = () => {
	return (
		<>
			<p>Anime Specs {`id: ${useParams().id}`}</p>
		</>
	);
};

export default AnimeSpecsPage;
