/** @format */

import { useNavigate } from "react-router-dom";

export const CardComponent = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <>
      <figure
        id="fig"
        onClick={() => navigate(`/anime/${anime.mal_id}`)}
        style={{ paddingTop: "5vh" }}
      >
        <img id="cardImg" src={anime.images?.jpg.image_url} alt="anime-photo" />
        <figcaption style={{ color: "white" }}>
          {anime.titles ? anime.titles[0].title : undefined}
        </figcaption>
      </figure>
    </>
  );
};
