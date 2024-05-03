import { configureStore } from "@reduxjs/toolkit";
import { movies } from "./Slices/moviesSlices/homeMoviesSlice";
import { series } from "./Slices/seriesSlices/homeSeriesSlice";
import { myMovies } from "./Slices/moviesSlices/moviesSlice";

const store = configureStore({
  reducer: { movies, series, myMovies },
});

export default store;
