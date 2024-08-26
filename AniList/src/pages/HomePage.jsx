/** @format */
import NavBar from "../components/NavBar";
import logo from "../assets/logo.png";

import { useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";

const HomePage = () => {
  const { setActive } = useContext(AnimeContext);

  useEffect(() => {
    setActive("home");
  });
  return (
    <>
      <section id="homepageBkg">
        <NavBar />
        <img
          id="logo"
          src={logo}
          alt="logo"
          srcSet=""
          style={{
            height: "30vw",
          }}
        />
        <p
          style={{
            fontSize: "2rem", // Larger font size
            color: "white", // White text color
            fontWeight: "bold", // Bold text
            textAlign: "center", // Center the text
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a subtle shadow for better contrast
            margin: "2rem 0", // Add some spacing above and below
          }}
        >
          Welcome to the Home of Anime!
        </p>
      </section>
    </>
  );
};

export default HomePage;
