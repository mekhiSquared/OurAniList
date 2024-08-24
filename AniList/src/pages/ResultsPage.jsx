/** @format */

import { handleFetch } from "../utils";
import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { TopTenComponent } from "../components/TopTenComponent";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

import { useParams } from "react-router-dom";

const ResultsPage = () => {
	const { queryAnimeList, setQueryAnimeList, setFetchError } =
		useContext(AnimeContext);
	const { query, pageNum } = useParams();

	useEffect(() => {
		if (!queryAnimeList.length) {
			const url = pageNum
				? `https://api.jikan.moe/v4/anime?sfw&q=${query}&page=${pageNum}`
				: `https://api.jikan.moe/v4/anime?sfw&q=${query ?? ""}`;

			const doFetch = async () => {
				const [data, error] = await handleFetch(url);

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
