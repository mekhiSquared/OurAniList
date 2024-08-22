/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AnimeContext from "./context/AnimeContext";
import { SearchBar } from "./components/SearchBar";

function App() {
  const { fetchError } = useContext(AnimeContext);

  if (fetchError) return <p>{errorState.message}</p>;

  return <SearchBar />;
}

export default App;
