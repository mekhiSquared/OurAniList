/** @format */

import { SearchBar } from "./SearchBar";
import ToHomeButton from "./ToHomeButton";
import ToTrendingButton from "./ToTrendingButton";

import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

const NavBar = () => {
	const { active } = useContext(AnimeContext);
	return (
		<nav style={{ position: "fixed", top: "0", width: "100%" }}>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "rgb(56, 102, 65, 0.75)",
					padding: "0 10%",
					gap: "1.5rem",
				}}>
				<li
					style={{
						display: "inline-flex",
						backgroundColor: active === "home" ? "#A7C957" : "rgb(0,0,0,0)",
						padding: "1.75% 1.75%",
					}}>
					<ToHomeButton />
				</li>

				<li
					style={{
						display: "inline-flex",
						backgroundColor: active === "trending" ? "#A7C957" : "rgb(0,0,0,0)",
						padding: "1.75% 1.75%",
					}}>
					<ToTrendingButton />
				</li>
				<li
					style={{
						display: "inline-flex",
						marginLeft: "auto",
					}}>
					<SearchBar />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
