/** @format */

import AnimeContext from "./AnimeContext";
import { useEffect, useState } from "react";
import handleFetch from "../utils";

const AnimeProvider = ({ children }) => {
	// these states are for the fetch data
	const [trendingAnimeList, setTrendingAnimeList] = useState([]);
	const [fetchError, setFetchError] = useState(null);

	// useEffect hook to fetch data once
	useEffect(() => {
		const doFetch = async => {
			// fetch and set data
			// this fetch will probably only be for the trending anime
		};
		doFetch();
	}, []);

	// values to be passed into the context. this data will be accessible throughout the whole project with useContext
	const value = { key: "value" };

	return (
		<AnimeContext.Provider value={value}>
			{/* we will pass the app in here so everything will have access to the context */}
			{children}
		</AnimeContext.Provider>
	);
};

export default AnimeProvider;
