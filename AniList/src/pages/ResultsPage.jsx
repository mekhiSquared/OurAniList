/** @format */

import { CardComponent } from "../components/CardComponent";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

const ResultsPage = () => {
	const { queryAnimeList } = useContext(AnimeContext);

	return (
		<>
			<NavBar />
			<p>Results</p>
			<section id='resultsContainer'>
				<ul id='animeResults'>
					{queryAnimeList?.map(anime => (
						<li key={anime.mal_id}>
							<CardComponent anime={anime} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default ResultsPage;
