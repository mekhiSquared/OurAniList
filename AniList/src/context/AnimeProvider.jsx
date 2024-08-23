/** @format */

import AnimeContext from "./AnimeContext";
import { useEffect, useState } from "react";
import { handleFetch } from "../utils";

const AnimeProvider = ({ children }) => {
	// these states are for the fetch data
	const [trendingAnimeList, setTrendingAnimeList] = useState([]);
	const [queryAnimeList, setQueryAnimeList] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	// useEffect hook to fetch data once
	useEffect(() => {
		const doFetch = async () => {
			const [data, error] = await handleFetch(
				`https://api.jikan.moe/v4/top/anime`
			);
			if (data) setTrendingAnimeList(data.data);
			if (error) setFetchError(error);
		};
		doFetch();
	}, []);

	// values to be passed into the context. this data will be accessible throughout the whole project with useContext
	const value = {
		trendingAnimeList,
		queryAnimeList,
		setQueryAnimeList,
		fetchError,
		setFetchError,
	};

	return (
		<AnimeContext.Provider value={value}>
			{/* we will pass the app in here so everything will have access to the context */}
			{children}
		</AnimeContext.Provider>
	);
};

export default AnimeProvider;
