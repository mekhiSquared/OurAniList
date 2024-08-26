/** @format */

import AnimeContext from "./AnimeContext";
import { useEffect, useState } from "react";
import { handleFetch } from "../utils";

const AnimeProvider = ({ children }) => {
	// these states are for the fetch data
	const [trendingAnimeList, setTrendingAnimeList] = useState([]);
	const [lastPageNum, setLastPageNum] = useState(1);
	const [queryAnimeList, setQueryAnimeList] = useState([]);
	const [fetchError, setFetchError] = useState(null);
	const [dependencyFlag, setDependencyFlag] = useState(true);
	const [active, setActive] = useState("home");

	// useEffect hook to fetch data once
	useEffect(() => {
		const doFetch = async () => {
			const [data, error] = await handleFetch(
				`https://api.jikan.moe/v4/top/anime?sfw&page1`
			);

			if (data) {
				setTrendingAnimeList(data.data);
				setLastPageNum(data.pagination["last_visible_page"]);
			}
			if (error) setFetchError(error);
		};
		doFetch();
	}, []);

	// values to be passed into the context. this data will be accessible throughout the whole project with useContext
	const value = {
		trendingAnimeList,
		lastPageNum,
		queryAnimeList,
		setQueryAnimeList,
		fetchError,
		setFetchError,
		dependencyFlag,
		setDependencyFlag,
		active,
		setActive,
	};

	return (
		<AnimeContext.Provider value={value}>
			{/* we will pass the app in here so everything will have access to the context */}
			{children}
		</AnimeContext.Provider>
	);
};

export default AnimeProvider;
