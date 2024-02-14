import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  let actorList = actors.map(actor => {
    let movieList = actor.movies.map(movie => {
      return(
        <li key={movie}>{movie}</li>
      )
    })
    return (
      <article key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>{movieList}</ul>
      </article>
    )
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;
