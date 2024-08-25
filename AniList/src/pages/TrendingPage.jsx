/** @format */
import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";
import { useParams } from "react-router-dom";
import { handleFetch } from "../utils";

const TrendingPage = () => {
	const { trendingAnimeList, lastPageNum, setFetchError, setActive } =
		useContext(AnimeContext);
	const { pageNum } = useParams();
	const [currPageList, setCurrPageList] = useState(null);

	useEffect(() => {
		if (pageNum > 1 && pageNum <= lastPageNum) {
			const doFetch = async () => {
				const [page, error] = await handleFetch(
					`https://api.jikan.moe/v4/top/anime?sfw&page=${pageNum}`
				);

				if (page) setCurrPageList(page.data);
				if (error) setFetchError(error);
			};
			doFetch();
		}

		setActive("trending");
	}, [lastPageNum]);

	return (
		<>
			<NavBar />
			<p>Trending</p>
			<section id='resultsContainer'>
				<ul id='animeResults'>
					{(currPageList ?? trendingAnimeList)?.map(anime => (
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
