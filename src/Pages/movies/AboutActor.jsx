import React, { useEffect } from "react";
import { CgSmileSad } from "react-icons/cg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getInfoActor,
  getWorkActor,
} from "../../SystmeRdx/Slices/moviesSlices/castAndCrew";

const AboutActor = () => {
  const { idactor, nameactor } = useParams();

  const { infoActor, actorsWork } = useSelector(
    (state) => state.AllcastAndCrew
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoActor(idactor));
    dispatch(getWorkActor(idactor));
  }, []);

  const navigate = useNavigate();
  const backAstep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full ">
      <div className=" grid grid-cols-4 gap-x-10 ms-10 ">
        <div className=" col-span-4 md:col-span-1 flex justify-center">
          <img
            className="rounded-2xl w-[50%] md:w-full "
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${infoActor.profile_path}`}
            alt=""
          />
        </div>
        <div className="col-span-4 md:col-span-3 w-full ">
          <h1 className="text-white mt-5 font-bold text-3xl text-center md:text-start md:mt-0">
            {infoActor.name}
          </h1>
          <div className="text-white my-10">
            <h1 className="font-bold  text-2xl mb-5 text-[#0DCAF0] text-center md:text-start">
              Piography
            </h1>
            {infoActor.biography ? (
              <p>{infoActor.biography}</p>
            ) : (
              <p className="text-center md:text-start">
                There's no Bio Belongs To This Actor
              </p>
            )}
          </div>
        </div>
      </div>
      <div className=" flex grid-cols-5 w-full flex-col md:flex-row   ">
        <div className="col-span-1 grid gap-y-5 w-full justify-items-center items-center md:w-[25%] md:justify-items-start ms-5 ">
          <h1 className="text-white text-3xl mb-5 font-bold">Personal Info</h1>
          <div className="text-white ">
            <h1 className="text-2xl font-bold">Known For </h1>
            <h1 className="text-[#0DCAF0] text-xl">
              {infoActor.known_for_department}
            </h1>
          </div>
          <div className="text-white ">
            <h1 className="text-2xl font-bold">Gender</h1>
            <h1 className="text-[#0DCAF0] text-xl">{infoActor.gender}</h1>
          </div>
          <div className="text-white ">
            <h1 className="text-2xl font-bold">Birthday</h1>
            <h1 className="text-[#0DCAF0] text-xl">{infoActor.birthday}</h1>
          </div>
          <div className="text-white ">
            <h1 className="text-2xl font-bold">Place_Of_Birth</h1>
            <h1 className="text-[#0DCAF0] text-xl">
              {infoActor.place_of_birth}
            </h1>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">Also_Known_As</h1>
            {infoActor.also_known_as &&
              infoActor.also_known_as.map((name, i) => (
                <h1 key={i} className="text-[#0DCAF0] text-xl">
                  {name}
                </h1>
              ))}
          </div>
        </div>
        <div className="py-10    col-span-4  grid justify-items-center  ">
          {actorsWork.length >= 1 ? (
            <div className="w-[75%] flex overflow-auto gap-6 ">
              {actorsWork.map((movie, i) => (
                <div className="" key={i}>
                  <Link
                    to={`/movies/${movie.id}/title/${movie.original_title}`}
                    // to={"/movieDetails"}
                  >
                    <Card
                      className="mt-10 w-96 bg-gray-900  font-bold "
                      //   onClick={() => dispatch(aboutRecommend())}
                    >
                      <CardHeader color="white" className="relative h-96">
                        <img
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                          className="w-[150%] h-[100%] "
                          alt="card-image"
                        />
                      </CardHeader>
                      <CardBody>
                        <div variant="h5" className="mb-2 text-white text-2xl">
                          {movie.title}
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-white text-2xl my-5  w-[75%] h-20 bg-gray-900 rounded-2xl flex justify-center items-center">
              Sorry We Don't Have Any Actor's Work For This Movie
              <div className="ms-2">
                <CgSmileSad />
              </div>
            </div>
          )}
          <Button
            onClick={backAstep}
            variant="outlined"
            className=" mt-10 border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
          >
            Back a step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutActor;
