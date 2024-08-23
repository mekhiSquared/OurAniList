export const TopTen = (anime) => {
  return (
    <>
      <NavBar />
      <p>Results</p>
      <section id="resultsContainer">
        <ul id="animeResults">
          {anime?.slice(0, 9).map((anime) => (
            <li key={anime.mal_id}>
              <CardComponent anime={anime} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
