import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import ReactStars2 from "react-stars";
import {
  decress,
  getMoviesPage,
  incress,
} from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import { Link } from "react-router-dom";
const Movies = () => {
  const { movies, counter, checkMovies, test } = useSelector(
    (state) => state.myMovies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPage());
  }, [!checkMovies]);
  // console.log(movies);
  // const movieDetails = () => {
  //   console.log("ho");
  // };
  // console.log(movies);
  return (
    <div>
      <h1 className="text-white">Movies </h1>
      <div className="grid grid-cols-4 justify-items-center items-center gap-8 container mx-auto ">
        {movies.map((movie, i) => (
          <Card className="max-w-[24rem] overflow-hidden" key={i}>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none w-full"
            >
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
                alt="ui/ux review check"
                width="100%"
              />
            </CardHeader>
            <CardBody className="bg-[#212529]">
              <Typography variant="h4" className="text-[#0DCAF0]">
                TITLE : <span className="text-white">{movie.title}</span>
              </Typography>
              <div
                variant="lead"
                color="gray"
                className="mt-3 font-normal flex  items-center text-light-green-50"
              >
                RATE :
                <span className="text-[#0DCAF0] me-10">
                  {movie.vote_average}
                </span>
              </div>
              {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              /> */}
              <div className="flex justify-center mt-5">
                <Link to={`/movies/${movie.id}/title/${movie.original_title}`}>
                  <Button
                    variant="outlined"
                    className="border-double border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-[white]"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="flex items-center gap-8 justify-center py-10 ">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => dispatch(decress(counter))}
          disabled={counter === 1}
          className="bg-white"
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography color="white" className="font-normal">
          Page <strong className="text-light-green-100">{counter}</strong> of{" "}
          <strong className="text-light-green-100">500</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => dispatch(incress(counter))}
          disabled={counter === 500}
          className="bg-white"
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    </div>
  );
};

export default Movies;
