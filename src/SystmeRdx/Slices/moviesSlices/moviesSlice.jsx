import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  movies: [],
  moviesLoading: false,
  moviesError: null,
  counter: 1,
  checkMovies: true,
};

export const getMoviesPage = createAsyncThunk(
  "getMoviesPage",
  async (counter = 1, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allMyMovies = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: {
          language: "en-US",
          page: `${counter}`,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return allMyMovies.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const MoviesSlice = createSlice({
  name: "MoviesSLice",
  initialState: data,
  reducers: {
    incress: (state, { payload }) => {
      state.counter += 1;
      state.checkMovies = false;
      console.log(payload);
    },
    decress: (state, { payload }) => {
      state.counter -= 1;
      state.checkMovies = false;
      console.log(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMoviesPage.pending, (state, action) => {
      state.moviesLoading = true;
    });
    builder.addCase(getMoviesPage.fulfilled, (state, action) => {
      state.movies = action.payload.results;

      state.moviesLoading = false;
    });
    builder.addCase(getMoviesPage.rejected, (state, action) => {
      state.moviesLoading = false;
      state.moviesError = action.payload;
    });
  },
});

export const myMovies = MoviesSlice.reducer;
export const { incress, decress } = MoviesSlice.actions;
