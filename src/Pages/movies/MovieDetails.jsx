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
  getVideoMovie,
} from "./../../SystmeRdx/Slices/moviesSlices/mediaSlice";
import axios from "axios";
const MovieDetails = () => {
  const { idMovie, nameMovie } = useParams();
  const dispatch = useDispatch();
  ////////////////

  const {
    movieDetails,
    test,
    movieDetails: { genres },
  } = useSelector((state) => state.myMovies);
  const {
    videoMovie,
    backDrops: { backdrops, posters },
  } = useSelector((state) => state.myMediaMovie);
  // console.log(backdrops);
  const {
    castAndCrew: { cast, crew },
    castShown,
    reviews,
  } = useSelector((state) => state.AllcastAndCrew);
  // console.log(test);
  ////////////////

  useEffect(() => {
    dispatch(getMovieDetails(idMovie));
    dispatch(getCastCrew(idMovie));
    dispatch(getReviewMovie(idMovie));
    dispatch(getVideoMovie(idMovie));
    dispatch(getBackDrops(idMovie));
  }, []);

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
  return (
    <div className="">
      <div
        className={`w-full    bg-no-repeat bg-center bg-cover mb-10`}
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.backdrop_path}')`,
        }}
      >
        <div className="w-full pt-5 text-center font-bold grid gap-y-5">
          <h1 className="text-[#0DCAF0]  text-3xl ">Movie Details</h1>
          <h1 className="text-light-green-100 text-3xl">
            {movieDetails.title}
          </h1>
          <div className="w-full flex  justify-center ps-16 text-2xl">
            <h1 className="text-light-green-100 text-xl font-bold">
              {movieDetails.release_date} ({movieDetails.original_language})
            </h1>
            {/* <div className=" font-bolder"> */}
            {genres &&
              genres.map((gener, i) => (
                <h1 className="text-light-green-100 text-xl font-bold " key={i}>
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
          <div className=" mb-5 ">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieDetails.poster_path}`}
              alt="logo"
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
              <h1 className="text-3xl text-[#0DCAF0] font-bold">Casting :</h1>
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
                className=" border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-[white]"
              >
                Back a step
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* page two */}
      <h1 className="text-3xl text-[#0DCAF0] container mx-auto py-5 font-bold ">
        Top Billed Cast
      </h1>

      <div className="grid grid-cols-10 w-full  container mx-auto ">
        <div className="  col-span-9 w-[84%]  overflow-auto flex gap-8">
          {castShown &&
            castShown.map((actor, i) => (
              <div className="" key={i}>
                <Card className="w-[15rem] h-[26rem] bg-[#212529] rounded shadow-gray-900">
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
                  <CardBody className="font-bold text-2xl">
                    <div
                      variant="h4"
                      className="flex flex-col  text-white gap-y-5"
                    >
                      <h1> {actor.name}</h1>
                      <h1> {actor.character}</h1>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          <div className="bbbb bg-gray-800   flex justify-center items-center">
            <Link
              to={`/movieDetails/${idMovie}/title/${nameMovie}`}
              className="text-3xl text-white "
            >
              Show More
            </Link>
          </div>
        </div>
        <div className="text-white text-xl">asdfsadfasd</div>
      </div>
      <div className="container mx-auto py-5  text-[#0DCAF0] text-xl ">
        <Button
          onClick={aboutCastAndCrew}
          // to={`/movieDetails/${idMovie}/title/${nameMovie}`}
          className="hover:underline hover:decoration-[#0DCAF0] hover:text-[red] bg-black text-xl "
        >
          Click to Know Full Cast And Crew
        </Button>
      </div>
      {/* reviews */}
      <div className=" w-full flex flex-col  text-white container mx-auto">
        <h1 className="text-[#0DCAF0] text-3xl">Social</h1>
        <h1 className="text-[green] font-bold underline mt-10">
          REVIEWS <span className="text-white">{reviews.length}</span>
        </h1>
        {reviews.length >= 1 ? (
          <div className="">
            {reviews.map(
              (review, i) =>
                i == 0 && (
                  <div className="" key={i}>
                    <div className=" w-[70%] bg-[#212529]  rounded-2xl py-5">
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
                            {review.created_at.split("").slice(0, 10).join("")}
                          </span>
                          {}
                        </h1>
                        <h1>
                          <span className="text-blue-600 text-2xl font-bold">
                            Content :-
                          </span>
                          <ShowMoreText width={550}>
                            {review.content}
                          </ShowMoreText>
                        </h1>
                        <h1></h1>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <div className="text-3xl  bg-[#212529]  rounded-2xl py-5 font-bold text-center my-10 flex justify-center">
            We don't have any reviews for{"  "}
            <span className="text-[#0DCAF0] ms-3"> {movieDetails.title}</span>
          </div>
        )}
        <Link
          to={`/movieDetails/${idMovie}`}
          className="w-1/2 text-2xl text-white  py-5 hover:text-[red] hover:decoration-[#0DCAF0] hover:underline"
        >
          Click To Read All Reviews
        </Link>
      </div>
      <div className="  flex flex-col gap-8 text-white   container mx-auto mt-10 ">
        <h1 className="text-[#0DCAF0] text-3xl">Media</h1>
        <div className="">
          <Tabs value="" className="">
            <TabsHeader className="w-[40%]   ">
              {data.map(({ label, value, name }) => (
                <Tab key={value} value={value} className="bg-none">
                  <div className="text-black">
                    {value == "html" ? (
                      <h1>
                        {label} ({videoMovie && videoMovie.length})
                      </h1>
                    ) : value == "react" ? (
                      <h1>
                        {label} ({backdrops && backdrops.length})
                      </h1>
                    ) : (
                      <h1>
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
                                      />
                                    </div>
                                  )
                              )}
                          </div>
                        )}
                        <div className="">
                          {value == "html" ? (
                            <Button
                              onClick={aboutVideo}
                              // to={
                              //   value == "html" &&
                              //   `/movieDetails/${idMovie}/title/${nameMovie}`
                              // }
                              className="hover:underline hover:decoration-[#0DCAF0] hover:text-[red] bg-black text-xl "
                            >
                              Click To See All Video
                            </Button>
                          ) : value == "react" ? (
                            <Link to="/" className="text-2xl hover:text-white">
                              Click To See All BackDrops
                            </Link>
                          ) : value == "vue" ? (
                            <Link to="/" className="text-2xl hover:text-white ">
                              Click To See All Posters
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </TabPanel>
                    </div>
                  )
              )}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
