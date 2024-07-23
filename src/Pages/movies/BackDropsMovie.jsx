import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBackDrops } from "../../SystmeRdx/Slices/moviesSlices/mediaSlice";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import { Button } from "@material-tailwind/react";

const BackDropsMovie = () => {
  const { idMovie, nameMovie } = useParams();
  const dispatch = useDispatch();
  const {
    backDrops: { backdrops, posters },
    sweetCheck,
  } = useSelector((state) => state.myMediaMovie);
  const { movieDetails } = useSelector((state) => state.myMovies);
  useEffect(() => {
    dispatch(getBackDrops(idMovie));
    dispatch(getMovieDetails(idMovie));
  }, []);
  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
    if (sweetCheck) {
      sweetCheck = false;
    }
  };
  //   console.log(backdrops);
  //   console.log(posters);

  return (
    <div className="my-10">
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex mb-10">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
          alt="logo"
          width="12%"
          className="rounded mb-5"
        />

        <div className="w-full flex flex-col justify-center  px-10 ">
          <h1 className="text-white font-bold  text-3xl">
            {movieDetails.title}
          </h1>
          <div className="mt-5">
            <Button
              onClick={backAstep}
              variant="outlined"
              className=" border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
            >
              Back a step
            </Button>
          </div>
        </div>
      </div>
      <h1 className="text-white text-4xl container mx-auto my-10">
        All BackDrops :
      </h1>
      <div className="w-full flex flex-wrap gap-10 container mx-auto">
        {backdrops &&
          backdrops.map((imgBack, i) => (
            <div className="" key={i}>
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${imgBack.file_path}`}
                width={200}
                height={200}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BackDropsMovie;
