/** @format */

import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";
import { CardComponent } from "./CardComponent";

export const TopTenComponent = anime => {
	const { trendingAnimeList } = useContext(AnimeContext);

	return (
		<>
			<section id='topTenContainer'>
				<ul id='topTen'>
					{trendingAnimeList?.slice(0, 9).map(anime => (
						<li key={anime.mal_id}>
							<CardComponent anime={anime} />
						</li>
					))}
				</ul>
			</section>
		</>
	);
};
