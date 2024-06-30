import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  seriesHome: [],
  seriesHomeLoading: false,
  seriesHomeError: null,
  topSeries: [],
};

export const getSeries = createAsyncThunk(
  "getSeries",
  async (i, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allSeries = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/on_the_air",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return allSeries.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const homeSeriesSlice = createSlice({
  name: "homeSeriesSLice",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getSeries.pending, (state, action) => {
      state.seriesHomeLoading = true;
    });
    builder.addCase(getSeries.fulfilled, (state, action) => {
      state.seriesHome = action.payload.results;
      state.topSeries = action.payload.results.filter((seir) => {
        return seir.vote_average > 7;
      });
      state.seriesHomeLoading = false;
    });
    builder.addCase(getSeries.rejected, (state, action) => {
      state.seriesHomeLoading = false;
      state.seriesHomeError = action.payload.message;
    });
  },
});

export const series = homeSeriesSlice.reducer;
