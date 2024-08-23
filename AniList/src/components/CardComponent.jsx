/** @format */

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AnimeContext from "../context/AnimeContext";

export const CardComponent = ({ anime }) => {
	const navigate = useNavigate();
	const { setDependencyFlag } = useContext(AnimeContext);

	return (
		<>
			<figure
				id='fig'
				onClick={() => (
					navigate(`/anime/${anime.mal_id}`), setDependencyFlag(f => !f)
				)}>
				<img
					id='cardImg'
					src={anime.images?.jpg.image_url}
					alt='anime-photo'
				/>
				<figcaption>
					{anime.titles ? anime.titles[0].title : undefined}
				</figcaption>
			</figure>
		</>
	);
};
