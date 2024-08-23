/** @format */

import "./App.css";
import { useContext } from "react";
import AnimeContext from "./context/AnimeContext";
import { SearchBar } from "./components/SearchBar";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import AnimeSpecsPage from "./pages/AnimeSpecsPage";
import ResultsPage from "./pages/ResultsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { fetchError } = useContext(AnimeContext);

  if (fetchError) return <p>{fetchError.message}</p>;

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/trending" element={<TrendingPage />}></Route>
      <Route path="/anime/:id" element={<AnimeSpecsPage />}></Route>
      <Route path="/results" element={<ResultsPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
