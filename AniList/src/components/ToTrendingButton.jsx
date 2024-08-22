/** @format */

import { Link } from "react-router-dom";

const ToTrendingButton = () => {
	return (
		<Link to={"/trending"}>
			<button className='ui button fluid'>Trending</button>
		</Link>
	);
};

export default ToTrendingButton;
