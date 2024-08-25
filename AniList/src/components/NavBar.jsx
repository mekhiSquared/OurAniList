/** @format */

import { SearchBar } from "./SearchBar";
import ToHomeButton from "./ToHomeButton";
import ToTrendingButton from "./ToTrendingButton";
import logo from "../assets/logo.png";
import { useContext } from "react";
import AnimeContext from "../context/AnimeContext";

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
					<a
						href='/'
						style={{ display: "inline-block", padding: "1.75% 1.75%" }}>
						<img
							src={logo}
							alt='Logo'
							style={{ height: "90px" }}
						/>
					</a>
				</li>
				<li
					style={{
						display: "inline-flex",
						backgroundColor:
							active === "home" ? "rgba(128, 128, 128, 0.5)" : "transparent",
						padding: "1.75% 1.75%",
					}}>
					<ToHomeButton />
				</li>
				<li
					style={{
						display: "inline-flex",
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
