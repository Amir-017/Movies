import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewMovie } from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import ShowMoreText from "react-show-more-text";
import { FaStar } from "react-icons/fa";
const ReviewMovie = () => {
  const { reviews } = useSelector((state) => state.AllcastAndCrew);
  const dispatch = useDispatch();
  const { idMovie, nameMovie } = useParams();
  //   console.log(reviews);
  useEffect(() => {
    dispatch(getReviewMovie(idMovie));
    dispatch(getMovieDetails(idMovie));
  }, []);
  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  //
  const { movieDetails } = useSelector((state) => state.myMovies);
  //   console.log(movieDetails);
  return (
    <div className="w-full text-white">
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex mt-5 ">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
          alt="logo"
          width="12%"
          className="rounded mb-5"
        />

        <div className="w-full flex flex-col justify-center  px-10 ">
          <h1 className="text-white font-bold text-3xl">
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

      {/*  */}
      {reviews.length >= 1 ? (
        <div className="">
          {reviews.map((review, i) => (
            <div className="my-10" key={i}>
              <div className="container mx-auto w-[100%] bg-[#212529]  rounded-2xl py-5">
                <div className="container mx-auto w-[70%]  flex flex-col gap-5 mt-5">
                  <div className="text-3xl flex ">
                    A Review by
                    <div className="text-[#0DCAF0] px-5">
                      {review.author}
                    </div>{" "}
                    <div className="w-[14%]  flex justify-center    border-[1px]   text-white   rounded-xl">
                      <FaStar className="me-2" /> {review.author_details.rating}
                    </div>
                  </div>
                  <div className="text-2xl">
                    Written by{"  "}
                    <span className="text-[#0DCAF0]">{review.author}</span> on
                    {"  "}
                    <span className="text-[#0DCAF0]">
                      {review.created_at.split("").slice(0, 10).join("")}
                    </span>
                  </div>

                  <div>
                    <span className="text-blue-600 text-2xl font-bold">
                      Content :-
                    </span>
                    <ShowMoreText width={550}>{review.content}</ShowMoreText>
                  </div>
                  <h1></h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-3xl w-[100%] bg-[#212529]  rounded-2xl py-5 font-bold text-center my-10 flex justify-center">
          We don't have any reviews for{" "}
          <span className="text-[#0DCAF0] ms-3"> {movieDetails.title}</span>
        </div>
      )}
    </div>
  );
};

export default ReviewMovie;
