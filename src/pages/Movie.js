import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [movieId])

  let genreList = movie.genres?.map(genre => {
    return <span key={genre}>{genre}</span>
  })

  return (
    <>
      <h1>{movie.title}</h1>
      <header>
        <NavBar />
      </header>
      <main>
        <p>{`Length: ${movie.time} Minutes`}</p>
        {genreList}
      </main>
    </>
  );
};

export default Movie;
