/** @format */

import { handleFetch } from "../utils";
import { useContext, useState } from "react";
import AnimeContext from "../context/AnimeContext";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
	const { setFetchError, setQueryAnimeList } = useContext(AnimeContext);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const submit = async e => {
		e.preventDefault();
		const [data, error] = await handleFetch(
			`https://api.jikan.moe/v4/anime?sfw&q=${search}&page=1`
		);

		if (data) setQueryAnimeList(data.data);
		if (error) setFetchError(error);

		let slashFlag = search.includes("/");

		navigate(`/results/${slashFlag ? search.replaceAll("/", "%2F") : search}`);
	};

	return (
		<form onSubmit={submit}>
			<label htmlFor='searchBar'></label>
			<input
				type='text'
				name='searchBar'
				id='searchBar'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<button type='submit'>SEARCH</button>
		</form>
	);
};
