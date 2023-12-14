import React from "react";
import { data } from "../Assets/Data Files/data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }

  isMovieInFavourites = (movie) => {
    const { favourites } = this.props.store.getState().movies;
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  render() {
    const search = this.props.store.getState().search;
    const { list, favourites, showFavourites } =
      this.props.store.getState().movies;
    console.log(this.props.store.getState().movies);
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.props.store.dispatch(showFavourite(false))}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.props.store.dispatch(showFavourite(true))}
            >
              Favourites
            </div>
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display! </div>
          ) : null}

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
