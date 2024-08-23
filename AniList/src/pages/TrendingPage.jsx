/** @format */
import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

const TrendingPage = () => {
	const { trendingAnimeList } = useContext(AnimeContext);

	return (
		<>
			<NavBar />
			<p>Trending</p>
			<section id='resultsContainer'>
				<ul id='animeResults'>
					{trendingAnimeList?.map(anime => (
						<li key={anime.mal_id}>
							<CardComponent anime={anime} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};
export default TrendingPage;
