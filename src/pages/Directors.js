import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
    .then(r => r.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  let directorsList = directors.map(director => {
    let movieList = director.movies.map(movie => {
      return(
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <article key={director.name}>
        <h2>{director.name}</h2>
        <ul>{movieList}</ul>
      </article>
    )
  })

  return (
    <>
      <h1>Directors Page</h1>
      <header>
        <NavBar />
      </header>
      <main>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
