/** @format */

import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllAnimePage from "./pages/AllAnimePage";
import TrendingPage from "./pages/TrendingPage";
import AnimeSpecsPage from "./pages/AnimeSpecsPage";
import ResultsPage from "./pages/ResultsPage";
import NotFoundPage from "./pages/NotFoundPage";

import { useContext } from "react";
import AnimeContext from "./context/AnimeContext";

function App() {
	const { fetchError } = useContext(AnimeContext);

	if (fetchError)
		return <h2 style={{ marginTop: "10rem" }}>{fetchError.message}</h2>;

	return (
		<Routes>
			{/* Home */}
			<Route
				path='/'
				element={<HomePage />}></Route>

			{/* ----------------------------------------------------------------------------------------- */}
			{/* Trending */}

			<Route
				path='/trending'
				element={<TrendingPage />}></Route>
			<Route
				path='/trending/:pageNum'
				element={<TrendingPage />}></Route>

			{/* ----------------------------------------------------------------------------------------- */}
			{/* All */}

			<Route
				path='/all'
				element={<AllAnimePage />}></Route>
			<Route
				path='/all/:pageNum'
				element={<AllAnimePage />}></Route>

			{/* ----------------------------------------------------------------------------------------- */}
			{/* Specs */}

			<Route
				path='/anime/:id'
				element={<AnimeSpecsPage />}></Route>

			{/* ----------------------------------------------------------------------------------------- */}
			{/* Results */}

			<Route
				path='/results'
				element={<ResultsPage />}></Route>
			<Route
				path='/results/:query'
				element={<ResultsPage />}></Route>
			<Route
				path='/results/:query/:pageNum'
				element={<ResultsPage />}></Route>

			{/* ----------------------------------------------------------------------------------------- */}
			{/* Not Found */}

			<Route
				path='*'
				element={<NotFoundPage />}></Route>
		</Routes>
	);
}

export default App;
