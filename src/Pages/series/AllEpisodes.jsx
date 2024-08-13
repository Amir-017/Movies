import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEpisodes } from "../../SystmeRdx/Slices/seriesSlices/aboutSeasonsAndEpisodesSlice";
import { getSeriesDetails } from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import fakeImg from "../../Photos/avatar-black-and-white-clipart-7.jpg";
import { FaStar } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";

const AllEpisodes = () => {
  const { idseries, season_number, nameseries } = useParams();

  const { seriesDetails } = useSelector((state) => state.series);

  const { episodes } = useSelector((state) => state.episodesAndCastCrew);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getEpisodes({ idseries, season_number }));
    dispatch(getSeriesDetails(idseries));
  }, []);
  // console.log(episodes);
  const backAstep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full">
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex justify-center items-center flex-col md:flex-row md:justify-start ">
        {/* <div className=""> */}
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.backdrop_path}`}
          alt="logo"
          // width="20%"
          className="rounded-2xl mb-5 w-[30%] md:w-[12%]"
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

      <div className="container mx-auto flex flex-col justify-center items-center lg:justify-start  gap-x-10 gap-y-10 ">
        {" "}
        <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold text-center md:text-start ">
          All Episodes
        </h1>
        {seriesDetails &&
          episodes.map((last, key) => (
            <div className="w-[70%] md:w-[90%] lg:w-[100%]" key={key}>
              <Card className=" md:mx-0  lg:flex-row bg-gray-900 flex flex-col    ">
                <div
                  //   shadow={true}
                  //   floated={true}

                  className=" m-0   lg:w-1/5   shrink-0 bg-gray-900 w-full flex justify-center items-center  rounded-[3em]"
                >
                  {last.still_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${last.still_path}`}
                      alt="logo"
                      className=" ps-5 pt-5 pb-5 w-[70%] md:w-[80%] md:me-5  lg:w-[70%] rounded-[2em]"
                    />
                  ) : (
                    <img
                      src={fakeImg}
                      alt="logo"
                      className=" ps-5 pt-5 pb-5 w-[70%] md:w-[80%] md:me-5  lg:w-[70%] rounded-[2em]"
                    />
                  )}
                </div>
                <CardBody className="w-full   ">
                  <div className=" font-bold text-white flex flex-col gap-y-5    ">
                    <div className="flex flex-col   md:flex-col lg:flex-row lg:gap-x-5 md:gap-y-5 items-center justify-evenly lg:items-start lg:justify-between  text-2xl">
                      <h1 className="text-[#0DCAF0]">
                        {" "}
                        Episode <span className="">{last.episode_number}</span>
                      </h1>
                      <div className="bg-white text-black flex rounded py-2 px-2 my-5 md:my-0 ">
                        <h1>{last.vote_average}</h1>
                        <FaStar className="me-0 md:me-2" />{" "}
                      </div>
                      <h1 className="text-[#0DCAF0]">{last.air_date}</h1>
                    </div>

                    {last.overview ? (
                      <h1 className="font-bold text-gray-300 mt-10 text-[16px] text-center lg:text-start">
                        {" "}
                        <ShowMoreText
                          width={550}
                          lines={6}
                          more="Show more"
                          less="Show less"
                          className="content-css"
                          anchorClass="show-more-less-clickable"
                          // onClick={this.executeOnClick}
                          expanded={false}
                          // width={280}
                          truncatedEndingComponent={"... "}
                        >
                          {last.overview}
                        </ShowMoreText>
                      </h1>
                    ) : (
                      <h1 className="font-bold text-[white] mt-10 text-[16px] text-center lg:text-start">
                        This Season Doesn't Have Overview Yet
                      </h1>
                    )}
                  </div>
                </CardBody>
              </Card>
              <Link
                className="text-[#0DCAF0] mt-3 hover:underline  text-center lg:text-start flex justify-start items-end"
                to={`/detailssereis/${idseries}/season/${last.season_number}/episode/${last.episode_number}`}
                // to="/"
              >
                All Cast & crew
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllEpisodes;
