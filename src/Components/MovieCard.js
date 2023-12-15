import React from "react";
import { addToFavorite, removeFromFavourite } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack, faHeart } from "@fortawesome/free-solid-svg-icons";

class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    // when fav button is clicked
    const { movie } = this.props;
    this.props.dispatch(addToFavorite(movie));
  };

  handleUnFavouriteClick = () => {
    // when unfav button is clicked
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourite(movie));
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
                Unfavourite <FontAwesomeIcon icon={faHeartCrack} />
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite <FontAwesomeIcon icon={faHeart} />
              </button>
            )}
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

export default connect(mapStateToProps)(MovieCard);
