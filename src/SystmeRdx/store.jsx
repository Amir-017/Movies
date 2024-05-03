import { configureStore } from "@reduxjs/toolkit";
import { movies } from "./Slices/moviesSlices/homeMoviesSlice";
import { series } from "./Slices/seriesSlices/homeSeriesSlice";

const store = configureStore({
  reducer: { movies, series },
});

export default store;
