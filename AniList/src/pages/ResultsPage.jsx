/** @format */

import { CardComponent } from "../components/CardComponent";
import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";
import { TopTenComponent } from "../components/TopTenComponent";
import { useParams } from "react-router-dom";
import { handleFetch } from "../utils";

const ResultsPage = () => {
	const { queryAnimeList, setQueryAnimeList, setFetchError } =
		useContext(AnimeContext);
	const { query, pageNum } = useParams();

	// console.log({ query, pageNum });

	useEffect(() => {
		if (!queryAnimeList.length && query) {
			const url = pageNum
				? `https://api.jikan.moe/v4/anime?sfw&q=${query}&page=${pageNum}`
				: `https://api.jikan.moe/v4/anime?sfw&q=${query}&page=1`;

			const doFetch = async () => {
				const [data, error] = await handleFetch(url);

				if (data) setQueryAnimeList(data.data);
				if (error) setFetchError(error);
			};
			doFetch();
		}

		if (!queryAnimeList.length && !query) {
			const doFetch = async () => {
				const [data, error] = await handleFetch(
					`https://api.jikan.moe/v4/anime?sfw&q=`
				);

				if (data) setQueryAnimeList(data.data);
				if (error) setFetchError(error);
			};
			doFetch();
		}
	}, []);

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
			{query ? (
				<>
					<p>Results</p>
					<p>You searched: "{query}"</p>
				</>
			) : (
				<>
					<p>No search term... </p>
					<p>Displaying default anime list</p>
				</>
			)}
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
