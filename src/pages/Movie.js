import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <header></header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {"test"}
      </main>
    </>
  );
};

export default Movie;
