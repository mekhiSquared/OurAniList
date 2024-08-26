/** @format */

import { Link } from "react-router-dom";

const ToAllAnimeButton = () => {
	return (
		<Link
			to={"/all/1"}
			style={{
				color: "white",
			}}>
			All
		</Link>
	);
};

export default ToAllAnimeButton;
