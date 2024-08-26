/** @format */

import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { TopTenComponent } from "../components/TopTenComponent";

import { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";
import { handleFetch } from "../utils";

import { useParams, useNavigate, Link } from "react-router-dom";

const ResultsPage = () => {
	const { query, pageNum } = useParams();
	const { setFetchError, setActive } = useContext(AnimeContext);
	const [lastPageNum, setLastPageNum] = useState(0);
	const [queryAnimeList, setQueryAnimeList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (pageNum > 0 && pageNum <= lastPageNum) {
			const url = pageNum
				? `https://api.jikan.moe/v4/anime?sfw&q=${query}&page=${pageNum}`
				: `https://api.jikan.moe/v4/anime?sfw&q=${query ?? ""}`;

			const doFetch = async () => {
				const [page, error] = await handleFetch(url);

				if (page) {
					page.data.length ? setQueryAnimeList(page.data) : navigate("/*");
					setLastPageNum(page.pagination["last_visible_page"]);
				}
				if (error) setFetchError(error);
			};
			doFetch();
		} else setLastPageNum(Number(pageNum));

		// param validation
		if (pageNum < 1 || isNaN(pageNum)) navigate(`/results/${query}/1`); // if its not a number or too small
		if (!isNaN(pageNum) && Number(pageNum) % 1 !== 0)
			navigate(`/results/${query}/${Math.round(Number(pageNum))}`); // if its not an integer
		if (lastPageNum > 1 && pageNum > lastPageNum)
			navigate(`/results/${query}/${lastPageNum}`); // if its too large

		setActive("results");
	}, [query, pageNum, lastPageNum]);

	return (
		<>
			<NavBar />
			<h1>RESULTS</h1>
			{query && queryAnimeList?.length ? (
				// if the search returns something & there is a query
				<>
					<h2>You searched for "{query}"</h2>
				</>
			) : (
				// otherwise
				<></>
			)}
			<ul
				style={{
					display: "flex",
					justifyContent: "space-around",
					margin: "2rem",
				}}>
				{pageNum == 1 ? (
					//disables the link when its on the first page
					<button disabled>{"<<"} Prev</button>
				) : (
					// Prev button makes the path head to the prev page
					<Link to={`/results/${query}/${Number(pageNum) - 1}`}>
						<button>{"<<"} Prev</button>
					</Link>
				)}
				<h2>
					Page {pageNum ?? 1} of {lastPageNum}
				</h2>
				{pageNum < lastPageNum ? (
					// Next button makes the path head to the next page
					<Link to={`/results/${query}/${Number(pageNum) + 1}`}>
						<button>Next {">>"}</button>
					</Link>
				) : (
					//disables the link when its on the last page
					<button disabled>Next {">>"}</button>
				)}
			</ul>
			<section
				style={{
					display: "grid",
					gridTemplateColumns: "4fr 1fr",
					padding: "15px",
					gap: "1rem",
				}}>
				{!queryAnimeList?.length ? (
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
