/** @format */

import { createContext } from "react";

// creating the context object, will be passing it into the provider to add data to it
// still this is the component we will be using the useContext() hook on
const AnimeContext = createContext();

export default AnimeContext;
