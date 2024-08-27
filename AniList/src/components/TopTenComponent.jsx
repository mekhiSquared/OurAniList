/** @format */

import { TopTenCard } from "./toptenCard";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

export const TopTenComponent = anime => {
	const { trendingAnimeList } = useContext(AnimeContext);

	return (
		<ul
			style={{
				borderRadius: "15px",
				display: "flex",
				flexFlow: "column",
				justifyContent: "space-evenly",
				alignItems: "center",
				gap: "1rem",
				background: "linear-gradient(to bottom, #386641, #6A994E, #A7C957)",
				padding: "15px 10px",
				listStyleType: "none", // Remove default list styling
			}}>
			<li
				style={{
					padding: "10px",
					backgroundColor: "black",
					borderRadius: "15px",
					width: "100%",
					maxWidth: "400px",
					border: "5px solid white",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<h2
					style={{
						color: "white",
						textAlign: "center",
						margin: "0",
						fontSize: "1rem", // Make the number larger
						zIndex: 1, // Ensure it's on top
					}}>
					TOP 10 TRENDING
				</h2>
			</li>
			{trendingAnimeList?.slice(0, 10).map((anime, i) => (
				<li
					key={anime.mal_id}
					style={{
						border: "5px solid white",
						display: "flex",
						alignItems: "center",
						gap: "20px",
						width: "100%", // Ensure list items take full width
						maxWidth: "400px", // Constrain the max width
						padding: "10px",
						backgroundColor: "black",
						borderRadius: "10px",
						position: "relative", // For absolute positioning of ranking number
					}}>
					<div
						style={{
							position: "absolute",
							left: "0", // Adjust as needed
							top: "50%",
							transform: "translateY(-50%)",
							fontSize: "5rem", // Make the number larger
							color: "white",
							fontWeight: "bold",
							zIndex: 1, // Ensure it's on top
							textShadow: `
			  -1px -1px 0 #000,  
			  1px -1px 0 #000,
			  -1px 1px 0 #000,
			  1px 1px 0 #000
			`, // Adds a stroke effect
						}}>
						{i + 1}
					</div>
					<TopTenCard anime={anime} />
					<div
						style={{
							marginLeft: "auto", // Push episode count to the far right
							color: "white",
							textAlign: "right",
							minWidth: "50px", // Ensure some space for the episode count
						}}></div>
				</li>
			))}
		</ul>
	);
};
