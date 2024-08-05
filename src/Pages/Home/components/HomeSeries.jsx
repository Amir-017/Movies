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
import { Link } from "react-router-dom";

// import Slider from "react-slick";

const HomeSeries = ({ items, data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 50,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 50,
          autoplay: true,
        },
      },
    ],
  };

  // console.log(items);
  return (
    <div className="container mx-auto">
      <h1 className=" text-4xl ms-9 text-blue-500 mb-5 text-center  md:text-start">
        {" "}
        Series
      </h1>

      <Slider {...settings} className="w-full grid justify-items-center">
        {data.map((item, i) => (
          <div className="px-10 handlediv" key={i}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
              alt="logo"
              className="rounded-2xl"
            />
          </div>
        ))}
      </Slider>
      <h1 className=" text-4xl ms-9 text-blue-500 mb-5 mt-10 text-center  md:text-start">
        Top Series
      </h1>

      <div className=" flex justify-center items-center gap-8 flex-wrap px-10 w-full relative mt-10 mb-10 rounded-md ">
        {items.map((item, i) => (
          // <div className="" >
          <Card
            className="w-[19rem] flex justify-center items-center  bg-gray-900"
            key={i}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-2xl w-full"
            >
              <img
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
                alt="logo"
                width="100%"
              />
            </CardHeader>
            <CardBody className="bg-gray-900 w-[19rem] rounded-2xl grid gap-y-4">
              <Typography
                variant="h4"
                color="blue-gray"
                className="text-white font-bold"
              >
                TITLE : {item.name}
              </Typography>
              <div variant="lead" color="gray" className="flex ">
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
                <Link
                // to={`/movies/${item.id}/title/${item.original_title}`}
                >
                  <Button
                    variant="outlined"
                    className="border-double border-[#0DCAF0]  text-[#0DCAF0] hover:bg-[#0DCAF0] hover:text-black"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeSeries;
