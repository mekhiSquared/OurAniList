/** @format */

import { useNavigate } from "react-router-dom";

export const TopTenCard = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/anime/${anime.mal_id}`)}
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",

        backgroundColor: "black",

        padding: "10px",

        maxWidth: "400px", // Set a max width for consistency

        height: "220px", // Ensure a fixed height for all cards

        boxSizing: "border-box",
      }}
    >
      <figure
        style={{
          width: "150px",

          height: "200px",

          borderRadius: "10px",

          overflow: "hidden",

          margin: "0",
        }}
      >
        <img
          id="cardImg"
          src={anime.images?.jpg.image_url}
          alt="anime-photo"
          style={{
            width: "100%", // Ensure the image fills the figure

            height: "100%", // Maintain aspect ratio

            objectFit: "cover", // Cover the entire figure area without distortion
          }}
        />
      </figure>

      <section
        style={{
          flex: "1",

          textAlign: "left", // Align text to the left

          color: "white",

          paddingLeft: "10px", // Space between image and text

          display: "flex",

          flexDirection: "column",

          justifyContent: "space-between", // Distribute space evenly

          height: "100%",

          boxSizing: "border-box",
        }}
      >
        <div>
          <h2
            style={{
              margin: "0",

              fontSize: "1rem", // Consistent font size

              overflow: "hidden",

              textOverflow: "ellipsis",
            }}
          >
            {anime.titles ? anime.titles[0].title : "Untitled"}
          </h2>
        </div>

        <div style={{ marginTop: "auto", fontSize: "0.9rem" }}>
          <p style={{ margin: "0" }}>Episodes: {anime.episodes || "N/A"}</p>
        </div>
      </section>
    </article>
  );
};
