/** @format */

import { CardComponent } from "../components/CardComponent";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";
import { TopTenComponent } from "../components/TopTenComponent";

const ResultsPage = () => {
	const { queryAnimeList } = useContext(AnimeContext);

	if (!queryAnimeList.length)
		return (
			<>
				<NavBar />
				<p>Results</p>
				<h2>There's no anime that fits your search...</h2>
				<h2>Please try another search term</h2>
			</>
		);

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
			<TopTenComponent />
		</>
	);
};

export default ResultsPage;
