/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStar,
	faTrophy,
	faCalendarAlt,
	faLeaf,
	faFilm,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/NavBar";

import { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";
import { handleFetch } from "../utils";

import { useParams, useNavigate, Link } from "react-router-dom";

const AnimeSpecsPage = () => {
	const [anime, setAnime] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();
	const { setActive } = useContext(AnimeContext);
	const [activeSection, setActiveSection] = useState("genres");

	const sections = [
		{ id: "genres", title: "Genres", data: anime.genres },
		{ id: "producers", title: "Producers", data: anime.producers },
		{ id: "licensors", title: "Licensors", data: anime.licensors },
		{ id: "studios", title: "Studios", data: anime.studios },
		{ id: "external", title: "External Links", data: anime.external },
		{ id: "streaming", title: "Where to Watch?", data: anime.streaming },
	];

	useEffect(() => {
		const doFetch = async () => {
			const [data, error] = await handleFetch(
				`https://api.jikan.moe/v4/anime/${id}/full`
			);
			if (data) {
				setAnime(data.data);
			} else if (error) {
				navigate(`/*`);
			}
		};
		setActive("specs");
		doFetch();
	}, [id]);

	const backgroundImage = {
		img: anime.trailer?.images?.maximum_image_url || "", // Ensure a default value
	};

	return (
		<>
			<NavBar />

			<div
				style={{
					backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
            linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
            linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
            linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
            url(${backgroundImage.img})
          `,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: "80vh",
					backgroundPosition: "center",
				}}></div>

			<div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
				<section
					style={{
						flex: "1 1 30%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<img
						src={anime.images?.jpg?.large_image_url}
						alt='anime pic'
						style={{ maxWidth: "100%", borderRadius: "8px" }}
					/>
					<div
						style={{
							marginTop: "2rem",
							display: "flex",
							gap: "1rem",
						}}>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center",
								padding: "0.5rem 1rem",
								backgroundColor: "#386641",
								color: "white",
								borderRadius: "8px",
								boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
								cursor: "pointer",
							}}>
							<FontAwesomeIcon
								icon={faFilm}
								style={{ marginRight: "0.5rem" }}
							/>
							<p style={{ margin: 0 }}>{anime.type}</p>
						</div>

						<div id="faves"
							style={{
								display: "inline-flex",
								alignItems: "center",
								padding: "0.5rem 1rem",
								backgroundColor: "#FF6B6B",
								color: "white",
								borderRadius: "8px",
								boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
								cursor: "pointer",
							}}>
							<FontAwesomeIcon
								icon={faHeart}
								style={{ marginRight: "0.5rem" }}
							/>
							<p style={{ margin: 0 }}>Favs {anime.favorites}</p>
						</div>
					</div>
				</section>

				<section
					style={{
						flex: "1 1 40%",
						color: "white",
					}}>
					<h1
						style={{
							marginBottom: "1rem",
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
							maxWidth: "100%",
						}}>
						{anime.title}
					</h1>
					<p>{anime.episodes} episodes</p>
					<p>{anime.aired?.string}</p>
					<section>
						<h2>Synopsis</h2>
						<p>{anime.synopsis}</p>
					</section>
				</section>

				<section
					style={{
						flex: "1 1 30%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						paddingLeft: "5rem",
					}}>
					<div
						style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
						<div
							style={{
								paddingLeft: "15px",
								color: "white",
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
								padding: "1rem",
								backgroundColor: "rgba(128, 128, 128, 0.1)",
								borderRadius: "8px",
								boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								maxWidth: "300px",
								flex: "1",
							}}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
								<FontAwesomeIcon
									icon={faStar}
									style={{ color: "#FFD700" }}
								/>
								<p style={{ margin: 0 }}>Rating: {anime.rating}</p>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
								<FontAwesomeIcon
									icon={faTrophy}
									style={{ color: "#C0C0C0" }}
								/>
								<p style={{ margin: 0 }}>Rank: {anime.rank}</p>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
								<FontAwesomeIcon
									icon={faCalendarAlt}
									style={{ color: "#00BFFF" }}
								/>
								<p style={{ margin: 0 }}>Year: {anime.year}</p>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
								}}>
								<FontAwesomeIcon
									icon={faLeaf}
									style={{ color: "#32CD32" }}
								/>
								<p style={{ margin: 0 }}>Season: {anime.season}</p>
							</div>
						</div>
						<div style={{ flex: "2", maxWidth: "600px" }}>
							<h2 style={{ color: "white" }}>Trailer</h2>
							<iframe
								src={anime.trailer?.embed_url}
								allow='autoplay; encrypted-media'
								allowFullScreen
								title='video'
								style={{
									width: "100%",
									height: "315px",
									borderRadius: "8px",
									boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
								}}
							/>
						</div>
					</div>
				</section>

				<div>
					<div
						style={{
							display: "flex",
							borderBottom: "2px solid #ccc",
							marginBottom: "1rem",
						}}>
						{sections.map(section => (
							<div
								key={section.id}
								style={{
									color: "black",
									cursor: "pointer",
									padding: "1rem",
									marginRight: "1rem",
									borderBottom:
										activeSection === section.id ? "3px solid #386641" : "none",
									backgroundColor:
										activeSection === section.id ? "#f0f0f0" : "#e0e0e0",
									borderRadius: "4px 4px 0 0",
								}}
								onClick={() => setActiveSection(section.id)}>
								{section.title}
							</div>
						))}
					</div>

					<div style={{ paddingBottom: "10rem" }}>
						{sections.map(
							section =>
								activeSection === section.id && (
									<ul
										key={section.id}
										style={{
											listStyleType: "none",
											padding: "0",
											margin: "0",
											display: "grid",
											gridTemplateColumns:
												"repeat(auto-fill, minmax(150px, 1fr))",
											gap: "1rem",
										}}>
										{section.data?.map((item, i) => (
											<li
												key={item.mal_id || i}
												style={{
													color: "white",
													backgroundColor: "rgba(128, 128, 128, 0.2)",
													padding: "0.75rem",
													borderRadius: "4px",
												}}>
												{item.url && (
													<Link
														to={item.url}
														style={{ color: "white" }}>
														<p>{item.name}</p>
													</Link>
												)}
											</li>
										))}
									</ul>
								)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default AnimeSpecsPage;
