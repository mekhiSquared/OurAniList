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
			console.log(data.data);
		};
		doFetch();
	}, [dependencyFlag]);

	return (
		<>
			<NavBar />
			<p>Anime Specs {`id: ${anime.mal_id}`}</p>
			<img
				src={anime.trailer?.images.maximum_image_url}
				alt='trailer pic'
			/>
			<h1>{anime.title}</h1>
			<img
				src={anime.images?.jpg.large_image_url}
				alt='anime  pic'
				srcSet=''
			/>
			<p>{anime.type}</p>
			<p>{anime.episodes}</p>
			<p>{anime.aired?.string}</p>
			<p>{anime.rating}</p>
			<p>{anime.rank}</p>
			<p>{anime.year}</p>
			<p>{anime.season}</p>
			<p>{anime.favorites}</p>
			<section>
				<p>{anime.synopsis}</p>
			</section>
			<section id='genre-container'>
				<ul id='genres'>
					{anime.genres?.map(anime => (
						<li key={anime.mal_id}>
							<p>{anime.name} </p>
						</li>
					))}
				</ul>
			</section>
			<iframe
				src={anime.trailer?.embed_url}
				allow='autoplay; encrypted-media'
				allowFullScreen
				title='video'
			/>{" "}
			<section id='producer-container'>
				<ul id='producers'>
					{anime.producers?.map(anime => (
						<li key={anime.mal_id}>
							<p>{anime.name} </p>
						</li>
					))}
				</ul>
			</section>
			<section id='licensors-container'>
				<ul id='licensors'>
					{anime.licensors?.map(anime => (
						<li key={anime.mal_id}>
							<p>{anime.name} </p>
						</li>
					))}
				</ul>
			</section>
			<section id='studios-container'>
				<ul id='studios'>
					{anime.studios?.map(anime => (
						<li key={anime.mal_id}>
							<p>{anime.name} </p>
						</li>
					))}
				</ul>
			</section>
			<section id='external-container'>
				<ul id='external'>
					{anime.external?.map((anime, i) => (
						<li key={i}>
							<p>{anime.name}</p>
							<a src={anime.url}>{anime.url}</a>
						</li>
					))}
				</ul>
			</section>
			<section id='streaming-container'>
				<ul id='streaming'>
					{anime.streaming?.map((anime, i) => (
						<li key={i}>
							<p>{anime.name}</p>
							<a src={anime.url}>{anime.url}</a>
						</li>
					))}
				</ul>
			</section>
			{/* <TopTenComponent /> commented out for now*/}
		</>
	);
};

export default AnimeSpecsPage;
