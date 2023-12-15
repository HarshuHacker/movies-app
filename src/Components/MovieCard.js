import React from "react";
import { addFavorite, removeFavourite } from "../actions";
import { storeContext } from "../index";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavorite(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class MovieCardWrapper extends React.Component {
  render() {
    return (
      <storeContext.Consumer>
        {(store) => {
          return (
            <MovieCard
              store={store}
              movie={this.props.movie}
              dispatch={store.dispatch}
              isFavourite={this.props.isFavourite}
            />
          );
        }}
      </storeContext.Consumer>
    );
  }
}

export default MovieCardWrapper;
