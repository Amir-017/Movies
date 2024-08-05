import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSeriesDetails,
  getVideoSeries,
} from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { Button } from "@material-tailwind/react";

const VideoSeries = () => {
  const { idseries, nameSeries } = useParams();

  const {
    seriesDetails,
    seriesHomeLoading,
    seriesDetails: { genres },

    //
    videoSeries,
    videoSeriesLoading,
    //
  } = useSelector((state) => state.series);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesDetails(idseries));

    dispatch(getVideoSeries(idseries));
  }, []);
  const navigate = useNavigate();

  const backAstep = () => {
    navigate(-1);
  };
  // console.log(videoSeries);
  // console.log(seriesDetails);
  return (
    <div className="w-full text-white text-2xl ">
      {/* header */}
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex mb-10">
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.poster_path}`}
          alt="logo"
          width="12%"
          className="rounded mb-5"
        />

        <div className="w-full flex flex-col justify-center  px-10 ">
          <h1 className="text-white font-bold  text-3xl">
            {seriesDetails.name}
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

      {/* videos */}
      <div className="w-full  grid justify-items-center gap-y-[5rem]  ">
        <h1 className="text-white text-4xl container mx-auto my-5">
          All Videos :
        </h1>
        {videoSeries.map((serie, i) => (
          <div className="" key={i}>
            <iframe
              className="border-[.1rem]"
              width="1400"
              height="400"
              src={`https://www.youtube.com/embed/${serie.key}?si=bLuvl3WnAUMERPL9`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      {/* {videoSeries.map((movie) => (
    <h1 key={movie.id}>{movie.name}</h1>
  ))} */}
    </div>
  );
};

export default VideoSeries;
