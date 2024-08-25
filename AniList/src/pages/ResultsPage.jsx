/** @format */

import { handleFetch } from "../utils";
import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { TopTenComponent } from "../components/TopTenComponent";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

import { useParams } from "react-router-dom";

const ResultsPage = () => {
	const { queryAnimeList, setQueryAnimeList, setFetchError, setActive } =
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

		setActive("results");
	}, []);

	return (
		<>
			<NavBar />
			<h1>RESULTS</h1>
			{query && queryAnimeList.length ? (
				// if the search returns something & there is a query
				<>
					<h2>You searched for "{query}"</h2>
				</>
			) : (
				// otherwise
				<></>
			)}
			<section
				style={{
					display: "grid",
					gridTemplateColumns: "4fr 1fr",
					padding: "15px",
					gap: "1rem",
				}}>
				{!queryAnimeList.length ? (
					// if the search doesnt return anything
					<section
						style={{
							display: "flex",
							flexFlow: "column",
							alignItems: "center",
							gap: "1rem",
							padding: "7px 15px",
						}}>
						<h2>No results match "{query}"...</h2>
						<h2>Please try again!</h2>
					</section>
				) : (
					// if the search returns something, display it
					<ul
						style={{
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr",
							gap: "8px",
						}}>
						{queryAnimeList?.map(anime => (
							<li key={anime.mal_id}>
								<CardComponent anime={anime} />
							</li>
						))}
					</ul>
				)}
				<TopTenComponent />
			</section>
		</>
	);
};

export default ResultsPage;
