import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "./component/Header";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
import Movies from "./Pages/movies";
import Series from "./Pages/series";
import MovieDetails from "./Pages/movies/MovieDetails";
import NotFound from "./Pages/NotFound/NotFound";
import AllWorkers from "./Pages/movies/AllWorkers";
import ReviewMovie from "./Pages/movies/ReviewMovie";
import VideoMovies from "./Pages/movies/VideoMovies";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetails,
  getMoviesPage,
} from "./SystmeRdx/Slices/moviesSlices/moviesSlice";
import axios from "axios";
import BackDropsMovie from "./Pages/movies/BackDropsMovie";
import PostersMovie from "./Pages/movies/PostersMovie";
import AboutActor from "./Pages/movies/AboutActor";
import MoviesDetailsSeries from "./Pages/series/MoviesDetailsSeries";
import SeriesWorker from "./Pages/series/SeriesWorker";
import ReviewSeries from "./Pages/series/ReviewSeries";
import VideoSeries from "./Pages/series/VideoSeries";
import BackDropsSeries from "./Pages/series/BackDropsSeries";
import PostersSeries from "./Pages/series/PostersSeries";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:idMovie/title/:nameMovie"
          element={<MovieDetails />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/cast"
          element={<AllWorkers />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/vid"
          element={<VideoMovies />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/backdrops"
          element={<BackDropsMovie />}
        />
        <Route
          path="/movieDetails/:idMovie/title/:nameMovie/posters"
          element={<PostersMovie />}
        />
        <Route
          path="/person/:idactor/hisname/:nameactor"
          element={<AboutActor />}
        />
        <Route path="/movieDetails/:idMovie" element={<ReviewMovie />} />
        <Route path="/" element={<Home />} />
        {/* ////////////////// */}
        <Route path="/series" element={<Series />} />
        <Route
          path="/series/:idSeries/title/:nameSeries"
          element={<MoviesDetailsSeries />}
        />
        <Route
          path="/movieDetailsseries/:idseries/title/:nameSeries/cast"
          element={<SeriesWorker />}
        />
        <Route
          path="/movieDetailsseries/:idseries"
          element={<ReviewSeries />}
        />
        <Route
          path="/movieDetailsseries/:idseries/title/:nameseries/vid"
          element={<VideoSeries />}
        />
        <Route
          path="/movieDetailsseries/:idseries/title/:nameseries/backdrops"
          element={<BackDropsSeries />}
        />
        <Route
          path="/movieDetailsseries/:idseries/title/:nameseries/posters"
          element={<PostersSeries />}
        />
        {/* <Route
          path="/person/:actorid/hisname/:actorname"
          element={<AboutActorSeries />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
