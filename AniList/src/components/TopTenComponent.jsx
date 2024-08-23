/** @format */

import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

export const TopTen = anime => {
	const { trendingAnimeList } = useContext(AnimeContext);

	return (
		<>
			<NavBar />
			<p>Results</p>
			<section id='resultsContainer'>
				<ul id='animeResults'>
					{trendingAnimeList?.slice(0, 9).map(anime => (
						<li key={anime.mal_id}>
							<CardComponent anime={anime} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};
