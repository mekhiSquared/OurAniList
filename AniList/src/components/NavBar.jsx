/** @format */

import { SearchBar } from "./SearchBar";
import ToHomeButton from "./ToHomeButton";
import ToAllAnimeButton from "./ToAllAnimeButton";
import ToTrendingButton from "./ToTrendingButton";
import logo from "../assets/logo.png";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";
import { Link } from "react-router-dom";

const NavBar = () => {
	const { active } = useContext(AnimeContext);
	return (
		<nav style={{ position: "sticky", top: "0", width: "100%" }}>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					background: "linear-gradient(to bottom, black, transparent)",
					padding: "0 10%",
					gap: "1.5rem",
				}}>
				<li>
					{/* Logo Link */}
					<Link to='/'>
						<img
							src={logo}
							alt='Logo'
							style={{ height: "120px", paddingTop: "20px" }}
						/>
					</Link>
				</li>
				<li
					style={{
						backgroundColor:
							active === "home" ? "rgba(128, 128, 128, 0.5)" : "transparent",
						padding: "1.75% 1.75%",
					}}>
					<ToHomeButton />
				</li>
				<li
					style={{
						backgroundColor:
							active === "all" ? "rgba(128, 128, 128, 0.5)" : "transparent",
						padding: "1.75% 1.75%",
					}}>
					<ToAllAnimeButton />
				</li>
				<li
					style={{
						backgroundColor:
							active === "trending"
								? "rgba(128, 128, 128, 0.5)"
								: "transparent",
						padding: "1.75% 1.75%",
					}}>
					<ToTrendingButton />
				</li>
				<li
					style={{
						marginLeft: "auto",
					}}>
					<SearchBar />
				</li>
			</ul>
		</nav>
	);
};
export default NavBar;
