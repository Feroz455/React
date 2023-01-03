/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  // const link = "https://swapi.dev/api/films";
  const fireBaseUrl = `https://react-http-102d4-default-rtdb.asia-southeast1.firebasedatabase.app/`;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${fireBaseUrl}movies.json`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     releaseDate: movieData.release_date,
      //     openingText: movieData.opening_crawl,
      //   };
      // });
      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading</p>;
  }
  const AddMovieHandler = async (movie) => {
    const response = await fetch(`${fireBaseUrl}movies.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={AddMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
// {
//   /* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
//         {!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}
//         {!isLoading && error && <p>{error}</p>}
//         {isLoading && <p>Loading...</p>} */
// }
