/** @format */

import { Link } from "react-router-dom";

const ToHomeButton = () => {
	return (
		<Link to={"/"}>
			<button className='ui button fluid'>Home</button>
		</Link>
	);
};

export default ToHomeButton;
