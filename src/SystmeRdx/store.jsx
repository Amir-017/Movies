import { configureStore } from "@reduxjs/toolkit";
import { movies } from "./Slices/moviesSlices/homeMoviesSlice";
import { series } from "./Slices/seriesSlices/homeSeriesSlice";
import { myMovies } from "./Slices/moviesSlices/moviesSlice";
import { AllcastAndCrew } from "./Slices/moviesSlices/castAndCrew";
import { myMediaMovie } from "./Slices/moviesSlices/mediaSlice";

const store = configureStore({
  reducer: { movies, series, myMovies, AllcastAndCrew, myMediaMovie },
});

export default store;
