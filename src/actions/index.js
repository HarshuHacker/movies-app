// action types
export const ADD_DEFAULT_MOVIES = "ADD_DEFAULT_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_SEARCHED_MOVIE_TO_LIST = "ADD_SEARCHED_MOVIE_TO_LIST";
export const ADD_MOVIE_TO_SEARCH_RESULT = "ADD_MOVIE_TO_SEARCH_RESULT";

// action creators

// Add Movies
export function addDefaultMovies(movies) {
  return {
    type: ADD_DEFAULT_MOVIES,
    movies,
  };
}

// Add Movie To Favourites
export function addToFavorite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

// Remove Movie To Favourites
export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

// Toggle To Show Favourites Or Not
export function showFavourite(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}

// Add Searched Movie To The Movies List
export function addSearchedMovieToList(movie) {
  return {
    type: ADD_SEARCHED_MOVIE_TO_LIST,
    movie,
  };
}

// Show Searched Movie
export function addMovieToSearchResult(movie) {
  return {
    type: ADD_MOVIE_TO_SEARCH_RESULT,
    movie,
  };
}

// here we need to use thunk as the return type is not an object and we need
// dispatch inside the function. Both of this can be resolved using thunk
export function handleMovieSearch(searchText) {
  return function (dispatch) {
    // fetching data from API
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        // dispatch action to save search results in store
        dispatch(addMovieToSearchResult(movie.Search));
      });
  };
}
