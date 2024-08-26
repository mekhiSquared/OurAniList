/** @format */

import { CardComponent } from "./CardComponent";

import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

export const TopTenComponent = anime => {
	const { trendingAnimeList } = useContext(AnimeContext);

	return (
		<ul
			style={{
				display: "flex",
				flexFlow: "column",
				alignItems: "center",
				gap: "1rem",
				backgroundColor: "#6A994E",
				padding: "7px 15px",
			}}>
			<li>
				<h2>TOP 10 TRENDING</h2>
			</li>
			{trendingAnimeList?.slice(0, 10).map((anime, i) => (
				<li
					key={anime.mal_id}
					style={{ display: "flex", alignItems: "center", gap: "20px" }}>
					<h2>{i + 1}</h2>
					<CardComponent anime={anime} />
				</li>
			))}
		</ul>
	);
};
