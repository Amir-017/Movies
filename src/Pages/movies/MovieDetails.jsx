import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../SystmeRdx/Slices/moviesSlices/moviesSlice";
import {
  getCastCrew,
  getReviewMovie,
} from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";
import { BiAddToQueue } from "react-icons/bi";
import { IoStarOutline } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
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
import ShowMoreText from "react-show-more-text";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  getBackDrops,
  // getCollectionMovie,
  getVideoMovie,
  ////
  // getMovieDetailsCollection,
  getRecommendMovie,
  aboutRecommend,
  ////
} from "./../../SystmeRdx/Slices/moviesSlices/mediaSlice";
import axios from "axios";
import swal from "sweetalert";
import { CgSmileSad } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const MovieDetails = () => {
  const { idMovie, nameMovie, collectionid } = useParams();

  const dispatch = useDispatch();
  ////////////////

  const {
    movieDetails,
    movieDetails: { genres },
    movieDetailsLoading,
  } = useSelector((state) => state.myMovies);
  const {
    videoMovie,
    videoLoading,
    checkRecommend,

    recommendationMovie,
    recommendationLoading,

    backDrops: { backdrops, posters },
  } = useSelector((state) => state.myMediaMovie);
  const {
    castAndCrew: { cast, crew },
    castShown,
    reviews,
    castAndCrewLoading,
    reviewsLoading,
  } = useSelector((state) => state.AllcastAndCrew);

  const { moviesSearch, checkSearchMovie } = useSelector(
    (state) => state.aboutSearchMovie
  );

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));

    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));

    dispatch(getRecommendMovie(idMovie));
  }, [checkSearchMovie ? checkSearchMovie : checkSearchMovie]);

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));

    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));

    dispatch(getRecommendMovie(idMovie));
  }, [checkRecommend ? checkRecommend : checkRecommend]);

  ////////////////////
  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  //tabs
  const data = [
    {
      label: "Videos",
      value: "html",
    },
    {
      label: "BackDrops",
      value: "react",
    },
    {
      label: "Posters",
      value: "vue",
    },
  ];

  ///tabs

  const aboutCastAndCrew = () => {
    navigate(`/movieDetails/${idMovie}/title/${nameMovie}/cast`);
  };
  const aboutVideo = () => {
    navigate(`/movieDetails/${idMovie}/title/${nameMovie}/vid`);
  };
  const aboutBackDropsMovie = () => {
    navigate(`/movieDetails/${idMovie}/title/${nameMovie}/backdrops`);
  };
  const aboutPostersMovie = () => {
    navigate(`/movieDetails/${idMovie}/title/${nameMovie}/posters`);
  };

  return (
    <div className="">
      <div className="">
        <div className=" w-full ">
          {movieDetailsLoading ? (
            <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
              <svg
                className="w-16 h-16 animate-spin text-white"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900"
                ></path>
              </svg>
            </div>
          ) : (
            <div
              className={`w-full    bg-no-repeat bg-center bg-cover mb-10 `}
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.backdrop_path}')`,
              }}
            >
              <div className="w-full">
                {/* <div className="w-full opacity-50"></div> */}
                <div className="w-full pt-5 text-center font-bold grid gap-y-5">
                  <h1 className="text-[#0DCAF0]  text-3xl ">Movie Details</h1>
                  <h1 className="text-light-green-100 text-3xl">
                    {movieDetails.title}
                  </h1>
                  <div className="w-full flex  justify-center ps-16 text-2xl">
                    <h1 className="text-light-green-100 text-xl font-bold">
                      {movieDetails.release_date} (
                      {movieDetails.original_language})
                    </h1>
                    {/* <div className=" font-bolder"> */}
                    {genres &&
                      genres.map((gener, i) => (
                        <h1
                          className="text-light-green-100 text-xl font-bold "
                          key={i}
                        >
                          {gener.name},
                        </h1>
                      ))}
                    <h1 className="text-light-green-100 text-xl font-bold px-5">
                      {(movieDetails.runtime / 60).toFixed(2)} sec
                    </h1>
                    {/* </div> */}
                  </div>
                </div>
                <div className="w-full container mx-auto flex  mt-10">
                  <div className=" mb-5 w-[60%]">
                    <img
                      src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
                      className="w-[100%] h-[100%] "
                    />
                  </div>
                  <div className="flex flex-col ms-10 ">
                    <div className="mb-10">
                      <h1 className="text-3xl text-[#0DCAF0] font-bold ">
                        OverView :{" "}
                        <span className="font-medium text-xl text-light-green-100 w-full">
                          {movieDetails.overview}
                        </span>
                      </h1>
                    </div>
                    <div className=" ">
                      <h1 className="text-3xl text-[#0DCAF0] font-bold">
                        Casting :
                      </h1>
                    </div>
                    <div className="flex py-10  justify-between items-center w-full">
                      <div className=" text-xl text-light-green-100 text-center">
                        {cast &&
                          cast.map((member, i) => (
                            <div className="flex flex-col " key={i}>
                              <h1 className="text-2xl text-white">
                                {i == 1 && member.name}
                              </h1>
                            </div>
                          ))}
                        <h1 className="text-yellow-800">Acting</h1>
                      </div>
                      <h1 className="text-white">||</h1>
                      <div className=" text-xl text-light-green-100 text-center">
                        {cast &&
                          cast.map((member, i) => (
                            <div className="flex flex-col " key={i}>
                              <h1 className="text-2xl text-white">
                                {i == 2 && member.name}
                              </h1>
                            </div>
                          ))}
                        <h1 className="text-yellow-800">Acting</h1>
                      </div>
                    </div>
                    {/*  */}
                    <div className="flex py-10  justify-between items-center w-full">
                      <div className=" text-xl text-light-green-100 text-center">
                        {crew &&
                          crew.map((member, i) => (
                            <div className="flex flex-col " key={i}>
                              <h1 className="text-2xl text-white">
                                {i == 0 && member.name}
                              </h1>
                            </div>
                          ))}
                        <h1 className="text-yellow-800">Production</h1>
                      </div>
                      <h1 className="text-white">||</h1>
                      <div className=" text-xl text-light-green-100 text-center">
                        {crew &&
                          crew.map((member, i) => (
                            <div className="flex flex-col " key={i}>
                              <h1 className="text-2xl text-white">
                                {i == 2 && member.name}
                              </h1>
                            </div>
                          ))}
                        <h1 className="text-yellow-800">Direction</h1>
                      </div>
                      <h1 className="text-white">||</h1>

                      <div className=" text-xl text-light-green-100 text-center">
                        {crew &&
                          crew.map((member, i) => (
                            <div className="flex flex-col " key={i}>
                              <h1 className="text-2xl text-white">
                                {i == 4 && member.name}
                              </h1>
                            </div>
                          ))}
                        <h1 className="text-yellow-800">Production</h1>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-white text-2xl">
                      <div className="flex flex-col">
                        <h1 className="flex justify-center items-center text-3xl">
                          <BiAddToQueue />
                        </h1>
                        <h1>Add To Watch List</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="flex justify-center items-center text-yellow-600 text-3xl">
                          <IoStarOutline />
                        </h1>
                        <h1>Rate Movie</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="flex justify-center items-center text-[red] text-3xl">
                          <FaVideo />
                        </h1>
                        <h1>Play Trailer</h1>
                      </div>
                    </div>
                    {/* button */}
                    <div className="flex justify-center my-10">
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
              </div>
            </div>
          )}

          {/* </div> */}
        </div>

        {/* page two */}
        <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold ">
          Top Billed Cast
        </h1>
        {castAndCrewLoading ? (
          <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
            <svg
              className="w-16 h-16 animate-spin text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="grid grid-cols-8 w-full  container mx-auto ">
            <div className="  col-span-7 w-[75%]  overflow-auto flex gap-8">
              {castShown &&
                castShown.map((actor, i) => (
                  <div className="" key={i}>
                    <Link to={`/person/${actor.id}/hisname/${actor.name}`}>
                      <Card className="w-[12rem] h-[26rem] bg-[#212529] rounded shadow-gray-900">
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 rounded "
                        >
                          <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                            alt="ui/ux review check"
                          />
                        </CardHeader>
                        <CardBody className=" text-1xl">
                          <div
                            variant="h4"
                            className="flex flex-col  text-white gap-y-2"
                          >
                            <h1> {actor.name}</h1>
                            <h1> {actor.character}</h1>
                          </div>
                        </CardBody>
                      </Card>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="w-[25%] flex justify-center">
              <div className="flex gap-x-3 text-[#0DCAF0] text-3xl">
                {/* amer */}
                <h1 className="hover:text-4xl">
                  <FaFacebook />
                </h1>
                <h1 className="hover:text-4xl">
                  <FaInstagram />
                </h1>
                <h1 className="hover:text-4xl">
                  <FaTwitter />
                </h1>
              </div>
              <div className="flex justify-center flex-col gap-y-7">
                <div className="text-white text-2xl mt-10">
                  <h1>Status</h1>
                  <h1 className="text-[#0DCAF0] mt-2">{movieDetails.status}</h1>
                </div>
                <div className="text-white text-2xl">
                  <h1>Budget</h1>
                  <h1 className="text-[#0DCAF0] mt-2">{movieDetails.budget}</h1>
                </div>
                <div className="text-white text-2xl">
                  <h1>original_lang</h1>
                  <h1 className="text-[#0DCAF0] mt-2">
                    {movieDetails.original_language?.toUpperCase()}
                  </h1>
                </div>

                <div className="text-white text-2xl">
                  <h1>revenue</h1>
                  <h1 className="text-[#0DCAF0] mt-2">
                    {movieDetails.revenue}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto py-5  text-[#0DCAF0] text-xl ">
          <Button
            onClick={aboutCastAndCrew}
            // to={`/movieDetails/${idMovie}/title/${nameMovie}`}
            className="text-gray-500 text-xl hover:text-white "
          >
            Full Cast And Crew
          </Button>
        </div>
        {/* reviews */}
        {reviewsLoading ? (
          <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
            <svg
              className="w-16 h-16 animate-spin text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <div className=" w-full flex flex-col  text-white container mx-auto">
            <h1 className="text-[#0DCAF0] text-3xl">Social</h1>
            <h1 className="text-white font-bold  mt-10 text-2xl">
              REVIEWS <span className="text-[#0DCAF0]">{reviews.length}</span>
            </h1>
            {reviews.length >= 1 ? (
              <div className="">
                {reviews.map(
                  (review, i) =>
                    i == 0 && (
                      <div className="" key={i}>
                        <div className=" w-[75%] bg-[#212529]  rounded-2xl py-5">
                          <div className="container mx-auto w-[70%]  flex flex-col gap-5 mt-5">
                            <h1 className="text-3xl">
                              A Review by{" "}
                              <span className="text-[#0DCAF0]">
                                {review.author}
                              </span>
                            </h1>
                            <h1 className="text-2xl">
                              Written by{" "}
                              <span className="text-[#0DCAF0]">
                                {review.author}
                              </span>{" "}
                              on{" "}
                              <span className="text-[#0DCAF0]">
                                {review.created_at
                                  .split("")
                                  .slice(0, 10)
                                  .join("")}
                              </span>
                              {}
                            </h1>
                            <h1>
                              <span className="text-[#0DCAF0] text-2xl font-bold">
                                Content :-
                              </span>
                              <ShowMoreText width={550}>
                                {review.content}
                              </ShowMoreText>
                            </h1>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ) : (
              <div className="text-3xl  bg-[#212529]  rounded-2xl py-5 font-bold text-center my-10 flex justify-center">
                We don't have any reviews for{"  "}
                <span className="text-[#0DCAF0] ms-3">
                  {" "}
                  {movieDetails.title}
                </span>
              </div>
            )}
            {reviews.length >= 1 && (
              <Link
                to={`/movieDetails/${idMovie}`}
                className="w-1/2 text-2xl text-gray-700   py-5 hover:text-[white]"
              >
                Click To Read All Reviews
              </Link>
            )}
          </div>
        )}

        {videoLoading ? (
          <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
            <svg
              className="w-16 h-16 animate-spin text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="  flex flex-col gap-8 text-white   container mx-auto mt-10 ">
            <h1 className="text-[#0DCAF0] text-3xl">Media</h1>
            <div className="">
              <Tabs value="html" className="">
                <TabsHeader className="w-[40%]    ">
                  {data.map(({ label, value, name }) => (
                    <Tab key={value} value={value} className=" ">
                      <div className="text-none    ">
                        {value == "html" ? (
                          <h1 className="text-black focus:text-5xl ">
                            {label} ({videoMovie && videoMovie.length})
                          </h1>
                        ) : value == "react" ? (
                          <h1 className="text-black ">
                            {label} ({backdrops && backdrops.length})
                          </h1>
                        ) : (
                          <h1 className="text-black ">
                            {label} ({posters && posters.length})
                          </h1>
                        )}
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className=" ">
                  {data.map(
                    ({ value, desc }, i) =>
                      i <= 5 && (
                        <div key={i} className="">
                          <TabPanel value={value}>
                            {value == "html" ? (
                              <div className="w-[75%] flex overflow-auto gap-6">
                                {videoMovie &&
                                  videoMovie.map(
                                    (movie, i) =>
                                      i <= 5 && (
                                        <div className="" key={i}>
                                          <iframe
                                            width="320"
                                            height="320"
                                            src={`https://www.youtube.com/embed/${movie.key}?si=bLuvl3WnAUMERPL9`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      )
                                  )}
                              </div>
                            ) : (
                              ""
                            )}
                          </TabPanel>
                          <TabPanel value={value} className=" ">
                            {value == "react" && (
                              <div className="  flex  gap-6  ">
                                {backdrops &&
                                  backdrops.map(
                                    (drop, i) =>
                                      i <= 5 && (
                                        <div className="" key={i}>
                                          <img
                                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${drop.file_path}`}
                                            alt=""
                                            width={200}
                                            height={200}
                                          />
                                        </div>
                                      )
                                  )}
                              </div>
                            )}
                          </TabPanel>

                          <TabPanel value={value}>
                            {value == "vue" && (
                              <div className=" flex  gap-6 ">
                                {posters &&
                                  posters.map(
                                    (poster, i) =>
                                      i <= 5 && (
                                        <div className="" key={i}>
                                          <img
                                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster.file_path}`}
                                            alt=""
                                            className=""
                                            width={200}
                                            height={200}
                                          />
                                        </div>
                                      )
                                  )}
                              </div>
                            )}
                            <div className="">
                              {value == "html"
                                ? videoMovie &&
                                  videoMovie.length > 2 && (
                                    <Button
                                      onClick={aboutVideo}
                                      className="text-inherit text-1xl hover:text-[white]  "
                                    >
                                      Click To See All Video
                                    </Button>
                                  )
                                : value == "react"
                                ? backdrops &&
                                  backdrops.length > 6 && (
                                    <Button
                                      onClick={aboutBackDropsMovie}
                                      // to="/"
                                      className="text-inherit text-1xl hover:text-[white] "
                                    >
                                      Click To See All BackDrops
                                    </Button>
                                  )
                                : value == "vue"
                                ? posters &&
                                  posters.length > 6 && (
                                    <Button
                                      onClick={aboutPostersMovie}
                                      // to="/"
                                      className="text-inherit text-1xl hover:text-[white]  mt-10"
                                    >
                                      Click To See All Posters
                                    </Button>
                                  )
                                : ""}
                            </div>
                          </TabPanel>
                        </div>
                      )
                  )}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        )}

        {/* s__ recommend movie */}
        {recommendationLoading ? (
          <div className=" grid min-h-[140px] w-full place-items-center  overflow-x-scroll rounded-lg p-6 lg:overflow-visible h-screen justify-items-center items-center">
            <svg
              className="w-16 h-16 animate-spin text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        ) : (
          <div className=" container mx-auto">
            <h1 className="text-2xl font-bold text-[#0DCAF0] my-10">
              RECOMMENDATIONS
            </h1>
            {recommendationMovie.length >= 1 ? (
              <div className="w-[75%] flex overflow-auto gap-6 ">
                {recommendationMovie.map((recomovie, i) => (
                  <div className="" key={i}>
                    <Card
                      className="mt-6 w-96 bg-gray-900  font-bold "
                      onClick={() => dispatch(aboutRecommend())}
                    >
                      <Link
                        to={`/movies/${recomovie.id}/title/${recomovie.original_title}`}
                      >
                        <CardHeader color="white" className="relative h-96">
                          <img
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${recomovie.poster_path}`}
                            className="w-[150%] h-[100%] "
                            alt="card-image"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography
                            variant="h5"
                            color="white"
                            className="mb-2"
                          >
                            {recomovie.title}
                          </Typography>
                        </CardBody>
                      </Link>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-white text-2xl my-5  w-[75%] h-20 bg-gray-900 rounded-2xl flex justify-center items-center">
                Sorry We Don't Have Any Recommendation For This Movie
                <div className="ms-2 text-[#0DCAF0]">
                  <CgSmileSad />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* )}` */}
    </div>
  );
};

export default MovieDetails;
