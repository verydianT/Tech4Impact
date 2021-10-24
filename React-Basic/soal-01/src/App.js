import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
              {animeList.map(function(movie) {
              return(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2" key={movie.mal_id}>
                    <MovieCard movie={movie} />
                </div>)
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
