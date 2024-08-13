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
    <div className="w-full text-white ">
      {/* header */}
      <div className=" w-full   bg-[#212529] px-10 pt-5 flex justify-center items-center flex-col md:flex-row md:justify-start ">
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

      {/* videos */}
      <div className="  grid justify-items-center gap-y-[5rem]  ">
        <h1 className="text-white text-4xl container mx-auto my-5">
          All Videos :
        </h1>
        {videoSeries.map((serie, i) => (
          <div className="" key={i}>
            <iframe
              className="border-[.1rem] w-[300px] h-[300px] md:w-[800px] md:h-[400px] lg:w-[1000px] lg:h-[400px]"
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
    </div>
  );
};

export default VideoSeries;
