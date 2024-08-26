/** @format */

import NavBar from "../components/NavBar";
import { CardComponent } from "../components/CardComponent";
import { TopTenComponent } from "../components/TopTenComponent";

import { useState, useContext, useEffect } from "react";
import AnimeContext from "../context/AnimeContext";
import { handleFetch } from "../utils";

import { useParams, useNavigate, Link } from "react-router-dom";

const AllAnimePage = () => {
  const { pageNum } = useParams();
  const { setFetchError, setActive } = useContext(AnimeContext);
  const [lastPageNum, setLastPageNum] = useState(0);
  const [currPageList, setCurrPageList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (pageNum > 0 && pageNum <= lastPageNum) {
      const doFetch = async () => {
        const [page, error] = await handleFetch(
          `https://api.jikan.moe/v4/anime?sfw&page=${pageNum}`
        );

        if (page) {
          page.data.length ? setCurrPageList(page.data) : navigate("/*");
          if (lastPageNum < page.pagination["last_visible_page"])
            setLastPageNum(page.pagination["last_visible_page"]);
        }
        if (error) setFetchError(error);
      };
      doFetch();
    } else setLastPageNum(Number(pageNum));

		// param validation
		if (pageNum < 1 || isNaN(pageNum)) navigate("/all/1"); // if its not a number or too small
		if (!isNaN(pageNum) && Number(pageNum) % 1 !== 0)
			navigate(`/all/${Math.round(Number(pageNum))}`); // if its not an integer
		if (lastPageNum > 1 && pageNum > lastPageNum)
			navigate(`/all/${lastPageNum}`); // if its too large

    setActive("all");
  }, [pageNum, lastPageNum]);


	return (
		<>
			<NavBar />
			<h1>ANIME</h1>
			<ul
				style={{
					display: "flex",
					justifyContent: "space-around",
					margin: "2rem",
				}}>
				{pageNum == 1 ? (
					//disables the link when its on the first page
					<button disabled>{"<<"} Prev</button>
				) : (
					// Prev button makes the path head to the prev page
					<Link to={`/all/${Number(pageNum) - 1}`}>
						<button>{"<<"} Prev</button>
					</Link>
				)}
				<h2>
					Page {pageNum ?? 1} of {lastPageNum}
				</h2>
				{pageNum < lastPageNum ? (
					// Next button makes the path head to the next page
					<Link to={`/all/${Number(pageNum) + 1}`}>
						<button>Next {">>"}</button>
					</Link>
				) : (
					//disables the link when its on the last page
					<button disabled>Next {">>"}</button>
				)}
			</ul>
			<section
				style={{
					display: "grid",
					gridTemplateColumns: "4fr 1fr",
					padding: "15px",
					gap: "1rem",
				}}>
				<ul
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr 1fr",
						gap: "8px",
					}}>
					{currPageList?.map(anime => (
						<li key={anime.mal_id}>
							<CardComponent anime={anime} />
						</li>
					))}
				</ul>
				<TopTenComponent />
			</section>
		</>
	);
};

export default AllAnimePage;
