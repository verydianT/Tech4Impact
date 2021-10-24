import { Component } from "react";
import animeList from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      isLoading: true
    }
  }

  async fetchMovieList() {
    const API = await fetch ("https://api.jikan.moe/v3/top/anime");
    const data = await API.json();
    this.setState({ movieList: data.top || [] })
  }

  componentDidMount(){
    setTimeout(() => this.fetchMovieList(), 3000);
  }

  componentDidUpdate(prevProv, prevState) {
    if (prevState.movieList.length != this.state.movieList.length){
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {this.state.isLoading ? <h2>Loading...</h2> : animeList.map((movie) => <MovieCard key={movie.mal_id} movie={movie} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
