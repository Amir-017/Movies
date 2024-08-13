import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCastCrewSeries,
  getSeriesDetails,
} from "../../SystmeRdx/Slices/seriesSlices/homeSeriesSlice";
import { Button } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import img from "../../Photos/th.jpeg";

const SeriesWorker = () => {
  const { idseries, nameSeries } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    seriesDetails,
    //
    castAndCrewSeries: { cast, crew },
  } = useSelector((state) => state.series);
  useEffect(() => {
    dispatch(getSeriesDetails(idseries));
    dispatch(getCastCrewSeries(idseries));
  }, []);
  // console.log(seriesDetails);
  const backAstep = () => {
    navigate(-1);
  };

  // console.log(seriesDetails);
  return (
    // <div className=""></div>
    <div className=" w-full">
      <div className=" w-full  bg-[#212529] px-10 pt-5 flex justify-center items-center flex-col md:flex-row md:justify-start ">
        {/* <div className=""> */}
        <img
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${seriesDetails.poster_path}`}
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
      <div className=" flex justify-between   container mx-auto mt-10 flex-col md:flex-row">
        <div className="ms-10">
          <h1 className="text-3xl text-white container mx-auto py-5 font-bold ">
            Cast :{" "}
            <span className="text-[#0DCAF0] ">{cast && cast.length}</span>
          </h1>
          {cast &&
            cast.map((actor, i) => (
              <div className="" key={i}>
                <Card className="w-[15rem] h-[26rem] bg-[#212529] rounded shadow-gray-900 flex my-10">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded-2xl "
                  >
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                        alt="ui/ux review check"
                        // width="100%"
                      />
                    ) : (
                      <img src={img} width="100%" />
                    )}
                  </CardHeader>
                  <CardBody className="font-bold py-5">
                    <div variant="h4" className="flex flex-col  text-white ">
                      <h1> .{actor.name}</h1>
                      <h1 className="text-xl font-medium text-yellow-800 ">
                        {actor.character}
                      </h1>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
        <div className="ms-10">
          <h1 className="text-3xl text-white container mx-auto py-5 font-bold ">
            Crew :{" "}
            <span className="text-[#0DCAF0] ">{crew && crew.length}</span>
          </h1>
          {crew &&
            crew.map((actor, i) => (
              <div className="" key={i}>
                {/*  */}
                <h1 className="text-white text-3xl">
                  {" *"}
                  {actor.known_for_department == "Writing"
                    ? actor.department
                    : actor.known_for_department == "Production"
                    ? actor.department
                    : actor.known_for_department == "Camera"
                    ? actor.department
                    : actor.known_for_department == "Editing"
                    ? actor.department
                    : actor.known_for_department == "Acting"
                    ? actor.department
                    : actor.known_for_department == "Art"
                    ? actor.department
                    : actor.known_for_department == "Visual Effects"
                    ? actor.department
                    : actor.department}
                </h1>
                {/*  */}
                <Card className="w-[15rem] h-[26rem] bg-[#212529] rounded shadow-gray-900 flex my-10">
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 rounded "
                  >
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`}
                        alt="ui/ux review check"
                        // width="100%"
                      />
                    ) : (
                      <img src={img} width="100%" />
                    )}
                  </CardHeader>
                  <CardBody className="font-bold py-5">
                    <div variant="h4" className="flex flex-col  text-white ">
                      {actor.known_for_department == "Writing"
                        ? actor.name
                        : actor.known_for_department == "Production"
                        ? actor.name
                        : actor.known_for_department == "Camera"
                        ? actor.name
                        : actor.known_for_department == "Editing"
                        ? actor.name
                        : actor.known_for_department == "Acting"
                        ? actor.name
                        : actor.known_for_department == "Art"
                        ? actor.name
                        : actor.known_for_department == "Visual Effects"
                        ? actor.name
                        : actor.name}
                      <h1 className="text-xl font-medium text-yellow-800 ">
                        {actor.known_for_department == "Writing"
                          ? actor.job
                          : actor.known_for_department == "Production"
                          ? actor.job
                          : actor.known_for_department == "Camera"
                          ? actor.job
                          : actor.known_for_department == "Editing"
                          ? actor.job
                          : actor.known_for_department == "Acting"
                          ? actor.job
                          : actor.known_for_department == "Art"
                          ? actor.job
                          : actor.known_for_department == "Visual Effects"
                          ? actor.job
                          : actor.job}
                      </h1>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <div className=" flex mb-10 justify-center items-center">
        <Button
          onClick={backAstep}
          variant="outlined"
          className=" border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
        >
          Back a step
        </Button>
      </div>
    </div>
  );
};

export default SeriesWorker;
