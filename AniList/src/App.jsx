/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AnimeContext from "./context/AnimeContext";

function App() {
	const { fetchError } = useContext(AnimeContext);

	if (fetchError) return <p>{errorState.message}</p>;

	return;
}

export default App;
