import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  castAndCrew: [],
  castShown: [],
  reviews: [],
};

export const getCastCrew = createAsyncThunk(
  "getCastCrew",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllCastCrew = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllCastCrew.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
//
export const getReviewMovie = createAsyncThunk(
  "getAllReviews",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllReviews = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllReviews.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
//
const castAndCrew = createSlice({
  name: "crew and cast",
  initialState: data,
  extraReducers: (builder) => {
    // all movies
    builder.addCase(getCastCrew.pending, (state, action) => {
      //   state.moviesLoading = true;
      // console.log("keeping");
    });
    builder.addCase(getCastCrew.fulfilled, (state, action) => {
      state.castAndCrew = action.payload;
      // console.log(action.payload);
      state.castShown = action.payload.cast.filter((actor, i) => {
        return i < 15;
      });

      //   state.moviesLoading = false;
    });
    builder.addCase(getCastCrew.rejected, (state, action) => {
      //   state.moviesLoading = false;
      //   state.moviesError = action.payload;
      console.log("error");
    });

    // all reviews
    builder.addCase(getReviewMovie.pending, (state, action) => {
      //   state.moviesLoading = true;
      // console.log("keeping");
    });
    builder.addCase(getReviewMovie.fulfilled, (state, action) => {
      state.reviews = action.payload.results;

      //   state.moviesLoading = false;
    });
    builder.addCase(getReviewMovie.rejected, (state, action) => {
      //   state.moviesLoading = false;
      //   state.moviesError = action.payload;
      console.log("error");
    });
  },
});

export const AllcastAndCrew = castAndCrew.reducer;
