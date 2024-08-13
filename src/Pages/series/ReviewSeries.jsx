import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getReviewSeries,
  getSeriesDetails,
} from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { Button } from "@material-tailwind/react";
import ShowMoreText from "react-show-more-text";
import { FaStar } from "react-icons/fa";

const ReviewSeries = () => {
  const { idseries, nameSeries } = useParams();

  const {
    seriesDetails,
    seriesHomeLoading,
    seriesDetails: { genres },

    //
    reviewsSeries: { results },
    reviewsSeriesLoading,
    seriesReviewError,
  } = useSelector((state) => state.series);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesDetails(idseries));
    dispatch(getReviewSeries(idseries));
  }, []);
  const navigate = useNavigate();

  const backAstep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full text-white">
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex justify-center items-center flex-col md:flex-row md:justify-start ">
        {/* <div className=""> */}
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.poster_path}`}
          alt="logo"
          // width="20%"
          className="rounded mb-5 w-[30%] md:w-[12%]"
        />
        {/* </div> */}

        <div className="w-full flex  flex-col justify-start   px-0 md:justify-center md:px-10 ">
          <h1 className="text-white font-bold  text-3xl text-center md:text-start">
            {seriesDetails.name}
          </h1>
          <div className="my-5 flex justify-center md:justify-start">
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
      {results && results.length >= 1 ? (
        <div className="">
          {results.map((review, i) => (
            <div className="my-10" key={i}>
              <div className="container mx-auto w-[100%] bg-[#212529]  rounded-2xl py-5">
                <div className="container mx-auto w-[70%]  flex flex-col gap-5 mt-5">
                  <div className="text-3xl flex  flex-col md:flex-row ">
                    A Review by
                    <div className="text-[#0DCAF0] px-5">
                      {review.author}
                    </div>{" "}
                    <div className="w-full  md:w-[10%] h-10  flex justify-center    border-[1px]   text-white   rounded-xl">
                      <FaStar className="me-0 md:me-2" />{" "}
                      {review.author_details.rating}
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
          <span className="text-[#0DCAF0] ms-3"> {seriesDetails.name}</span>
        </div>
      )}
    </div>
  );
};

export default ReviewSeries;
