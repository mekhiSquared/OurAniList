/** @format */
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardComponent } from "../components/CardComponent";
import { handleFetch } from "../utils";
import { TopTenComponent } from "../components/TopTenComponent";
import AnimeContext from "../context/AnimeContext";

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
			<CardComponent anime={anime} />
			<TopTenComponent />
		</>
	);
};

export default AnimeSpecsPage;
