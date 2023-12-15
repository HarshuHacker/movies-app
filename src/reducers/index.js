import { combineReducers } from "@reduxjs/toolkit";

import {
  ADD_DEFAULT_MOVIES,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SHOW_FAVOURITES,
  ADD_SEARCHED_MOVIE_TO_LIST,
  ADD_MOVIE_TO_SEARCH_RESULT,
} from "../actions";

// Initial Movie State
const initialMoviesState = {
  list: [], // List Of Movies
  favourites: [], // List Of Favourite Movies
  showFavourites: false, // Whether To Show All Movies Or Favourite Movies Only
};

// Reducers For Movies
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    // Add Movies
    case ADD_DEFAULT_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    // Add Movie To Favourites
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.movie],
      };

    // Remove Movie To Favourites
    case REMOVE_FROM_FAVOURITE:
      const newFavourites = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: newFavourites,
      };

    // Toggle To Show Favourites Or Not
    case SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    // Add Searched Movie To The Movies List
    case ADD_SEARCHED_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default:
      return state;
  }
}

// Initial Search State
const initialSearchState = {
  searchResult: [],
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    // Show Searched Movie
    case ADD_SEARCHED_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false, // Whether To Show Search Reults Or Not
      };

    // Add Searched Movie To The Movies List
    case ADD_MOVIE_TO_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.movie, // The Search Movie
        showSearchResults: true, // Whether To Show Search Reults Or Not
      };
    default:
      return state;
  }
}

// Combining The Movies And Search Reducer Into A Single Reducer
export default combineReducers({
  movies,
  search,
});
