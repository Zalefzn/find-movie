import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const getImage = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" alt="" src={`${getImage}/${movie.poster_path}`}></img>
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (x) => {
    if(x.length > 3){
      const queryData = await searchMovie(x);
      setPopularMovies(queryData.results)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This Movie Card</h1>
        <input
          placeholder="cari film anda"
          className="Movie-input"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
