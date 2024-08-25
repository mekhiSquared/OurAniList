/** @format */

import { Link } from "react-router-dom";

const ToHomeButton = () => {
  return (
    <Link
      to={"/"}
      style={{
        color: "white",
      }}
    >
      Home
    </Link>
  );
};

export default ToHomeButton;
