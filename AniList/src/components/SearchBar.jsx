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
			` https://api.jikan.moe/v4/anime?q=${search}&sfw`
		);

		if (data) setQueryAnimeList(data.data);
		if (error) setFetchError(error);

		navigate(`/results`);
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
