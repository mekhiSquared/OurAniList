export const CardComponent = ({ anime }) => {
  return (
    <>
      <figure id="fig">
        <img id="cardImg" src={anime.images.jpg.image_url} alt="anime-photo" />
        <figcaption>{anime.titles[0].title}</figcaption>
      </figure>
    </>
  );
};
