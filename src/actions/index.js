// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAVOURITES = "SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavorite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}

export function showFavourite(val) {
  return {
    type: SHOW_FAVOURITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

// For Adding Searched Movie To The Movies List
export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}

// here we need to use thunk as the return type is not an object and we need
// dispatch inside the function. Both of this can be resolved using thunk
export function handleMovieSearch(searchText) {
  return function (dispatch) {
    // fetching data from API
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}
