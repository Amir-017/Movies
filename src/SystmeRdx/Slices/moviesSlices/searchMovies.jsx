import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {
  moviesSearch: [],
  moviesSearchLoading: false,
  moviesSearchError: null,
  checkSearchMovie: false,
  searchLength: false,
};

export const getSearchMovies = createAsyncThunk(
  "getMoviessearch",
  async (nameSearch, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;
    // const navigate = useNavigate();

    try {
      const allSearch = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: `${nameSearch}`,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTU1MTY1Ni45ODk0NzYsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5q364lkG4MvwaH5wsZnJkThC-WljePLynW9cXj7FMiY",
        },
      });
      return allSearch.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const homeMoviesSearch = createSlice({
  name: "homeMoviesSLiceSearch",
  initialState: data,
  reducers: {
    aboutSearch: (state) => {
      // state.searchLength = 0;
      // console.log(state.searchLength);
      state.checkSearchMovie = !state.checkSearchMovie;
    },
    del: (state) => {
      state.searchLength = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchMovies.pending, (state, action) => {});
    builder.addCase(getSearchMovies.fulfilled, (state, action) => {
      state.searchLength = false;
      state.moviesSearch = action.payload.results;
    });
    builder.addCase(getSearchMovies.rejected, (state, action) => {});
  },
});

export const aboutSearchMovie = homeMoviesSearch.reducer;
export const { aboutSearch, amer, del } = homeMoviesSearch.actions;
