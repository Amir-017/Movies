import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  videoMovie: [],
  backDrops: [],
};

export const getVideoMovie = createAsyncThunk(
  "getAllVideo",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllVideos = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllVideos.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

export const getBackDrops = createAsyncThunk(
  "getbackdrops",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllBackDrops = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/images`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllBackDrops.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const mediaSlice = createSlice({
  name: "mediaSlice",
  initialState: data,
  extraReducers: (builder) => {
    // videos
    builder.addCase(getVideoMovie.pending, (state, action) => {});
    builder.addCase(getVideoMovie.fulfilled, (state, action) => {
      state.videoMovie = action.payload.results;
    });
    builder.addCase(getVideoMovie.rejected, (state, action) => {
      console.log("error");
    });
    /// videos

    //backdrops
    builder.addCase(getBackDrops.pending, (state, action) => {});
    builder.addCase(getBackDrops.fulfilled, (state, action) => {
      state.backDrops = action.payload;
    });
    builder.addCase(getBackDrops.rejected, (state, action) => {
      console.log("error");
    });
    ///backdrops
  },
});

export const myMediaMovie = mediaSlice.reducer;
