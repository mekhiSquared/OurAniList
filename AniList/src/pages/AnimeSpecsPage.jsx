/** @format */
import { handleFetch } from "../utils";
import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { TopTenComponent } from "../components/TopTenComponent";

import { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AnimeSpecsPage = () => {
  const [anime, setAnime] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { dependencyFlag } = useContext(AnimeContext);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      if (data) setAnime(data.data);
      if (error) navigate(`*`);
    };
    doFetch();
  }, [dependencyFlag]);

  return (
    <>
      <NavBar />
      <p>Anime Specs {`id: ${anime.mal_id}`}</p>
      <h1>{anime.titles[0].title}</h1>
      {/* <TopTenComponent /> commented out for now*/}
    </>
  );
};

export default AnimeSpecsPage;
