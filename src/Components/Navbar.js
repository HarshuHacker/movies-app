import React from "react";
import { addSearchedMovieToList, handleMovieSearch } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "", // default text in search tab
    };
  }

  handleAddToMovies = (movie) => {
    // adding search movie to the movie list
    this.props.dispatch(addSearchedMovieToList(movie));
  };

  handleSearchClick = () => {
    // when search button is clicked
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleSearchChange = (e) => {
    // when input is given is search tab
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { searchResult, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} placeholder="Search" />
          <button id="search-btn" onClick={this.handleSearchClick}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={searchResult.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{searchResult.Title}</span>
                  <button onClick={() => this.handleAddToMovies(searchResult)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
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

export default connect(mapStateToProps)(Navbar);
