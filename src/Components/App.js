import React from "react";
import { data } from "../Assets/Data Files/data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addDefaultMovies, showFavourite } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  componentDidMount() {
    // Adding Default Movies
    this.props.dispatch(addDefaultMovies(data));
  }

  isMovieInFavourites = (movie) => {
    // Checking if movie is fav or not
    return this.props.movies.favourites.indexOf(movie) !== -1 ? true : false;
  };

  changeTab = (val) => {
    // showing the highlighted tab based on movie and favourite
    this.props.dispatch(showFavourite(val));
  };

  render() {
    const { search } = this.props;
    const { list, favourites, showFavourites } = this.props.movies;
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies <FontAwesomeIcon icon={faFilm} />
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourites <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {displayMovies.length === 0 && (
            <div className="no-movies">No movies to display! </div>
          )}

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

export default connect(mapStateToProps)(App);
