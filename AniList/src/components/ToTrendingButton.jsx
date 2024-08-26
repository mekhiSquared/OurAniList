/** @format */

import { Link } from "react-router-dom";

const ToTrendingButton = () => {
	return (
		<Link
			to={"/trending/1"}
			style={{
				color: "white",
			}}>
			Trending
		</Link>
	);
};

export default ToTrendingButton;
