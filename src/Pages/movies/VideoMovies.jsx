import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getVideoMovie,
  // getMovieDetails,
} from "../../SystmeRdx/Slices/moviesSlices/mediaSlice";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";

const VideoMovies = () => {
  // const { idMovie, nameMovie } = useParams();
  // const dispatch = useDispatch();
  // const { movieDetails } = useSelector((state) => state.myMovies);

  // useEffect(() => {
  //   dispatch(getMoviesDetails(idMovie));

  //   dispatch(getVideoMovie(idMovie));
  // }, []);
  const { movieDetails } = useSelector((state) => state.myMovies);
  const dispatch = useDispatch();

  const {
    videoMovie,
    // backDrops: { backdrops, posters },
  } = useSelector((state) => state.myMediaMovie);

  const { idMovie, nameMovie } = useParams();
  // console.log(idMovie);
  useEffect(() => {
    dispatch(getMovieDetails(idMovie));
    dispatch(getVideoMovie(idMovie));
  }, []);

  // console.log(cast);

  // const navigate = useNavigate();
  // const backAstep = () => {
  //   navigate(-1);
  // };
  // console.log(videoMovie);
  return (
    <div className="w-full text-white text-2xl">
      <h1>VideoMovies</h1>
      {videoMovie.map((movie) => (
        <h1 key={movie.id}>{movie.name}</h1>
      ))}
    </div>
  );
};

export default VideoMovies;
