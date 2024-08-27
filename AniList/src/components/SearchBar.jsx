/** @format */

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const submit = async e => {
		e.preventDefault();

		const query = search.includes("/") ? search.replaceAll("/", "%2F") : search;

		navigate(`/results/${query}/1`);
	};

	return (
		<form
			onSubmit={submit}
			style={{
				display: "flex",
				alignItems: "center",
				gap: "0.5rem",
				backgroundColor: "rgba(128, 128, 128, 0.5)",
				padding: "0.75rem 1rem",
				borderRadius: "8px",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
			}}
			aria-label='Search Bar'>
			<label
				htmlFor='searchBar'
				style={{ display: "none" }}>
				Search
			</label>
			<input
				type='text'
				name='searchBar'
				id='searchBar'
				value={search}
				onChange={e => setSearch(e.target.value)}
				required
				style={{
					flex: "1",
					padding: "0.5rem",
					border: "1px solid #ccc",
					borderRadius: "4px",
					fontSize: "1rem",
					outline: "none",
				}}
			/>
			<button
				type='submit'
				style={{
					backgroundColor: "#386641",
					color: "white",
					border: "none",
					padding: "0.5rem 1rem",
					borderRadius: "4px",
					fontSize: "1rem",
					cursor: "pointer",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				}}>
				SEARCH
			</button>
		</form>
	);
};
