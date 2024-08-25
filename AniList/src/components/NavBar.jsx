/** @format */

import { SearchBar } from "./SearchBar";
import ToHomeButton from "./ToHomeButton";
import ToTrendingButton from "./ToTrendingButton";

const NavBar = () => {
  return (
    <nav>
      <ToHomeButton />
      <ToTrendingButton />
      <SearchBar />
    </nav>
  );
};

export default NavBar;
