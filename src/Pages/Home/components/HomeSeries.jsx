import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Slider from "react-slick";
import ReactStars from "react-stars";

// import Slider from "react-slick";

const HomeSeries = ({ items, data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // console.log(items);
  return (
    <div className="rounded-md">
      <h1 className=" text-4xl ms-9 text-blue-500 mb-5"> Series</h1>

      <Slider {...settings} className="">
        {data.map((item, i) => (
          <div className="px-10 rounded" key={i}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
              alt="logo"
            />
          </div>
        ))}
      </Slider>
      <h1 className=" text-4xl ms-9 text-blue-500 mb-5 mt-5">Top Series</h1>

      <div className=" flex justify-center items-center gap-8 flex-wrap px-10 w-full relative mt-10 mb-10 rounded-md ">
        {items.map((item, i) => (
          // <div className="" >
          <Card className="w-[19rem] flex justify-center items-center " key={i}>
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none w-full"
            >
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
                alt="logo"
                width="100%"
              />
            </CardHeader>
            <CardBody className="bg-gray-800 w-[19rem]">
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-white font-bold"
              >
                TITLE : {item.name}
              </Typography>
              <div
                variant="lead"
                color="gray"
                className="flex justify-evenly items-center"
              >
                <h1 className="text-white font-medium">
                  RATE :
                  <span className="text-[#0DCAF0] font-semibold">
                    {item.vote_average}
                  </span>
                </h1>
                <h1 className="mt-3">
                  {/* <ReactStars
                    count={5}
                    //   onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                  /> */}
                  ,
                </h1>
              </div>
              <div className="flex justify-center ">
                <Button
                  variant="outlined"
                  className="border-double border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-[white]"
                >
                  Details
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeSeries;
