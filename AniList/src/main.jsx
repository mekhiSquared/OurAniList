/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimeProvider from "./context/AnimeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AnimeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</AnimeProvider>
);
