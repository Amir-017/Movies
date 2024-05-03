import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <div className="text-white mb-10">
      <h1 className="font-bold text-center text-blue-400 text-4xl pt-7 h-[3em]">
        Home
      </h1>

      <div className="grid grid-cols-2 items-center justify-items-center w-full">
        <div className="w-[100%] ">
          <h1 className="font-bold text-3xl text-center h-[2em]">SORT BY</h1>
          <div className="flex  justify-evenly items-center">
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              Title
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              Poplarity
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              Date
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              Ratin
            </Button>
          </div>
        </div>
        <div className="w-[100%]  ms-[10em]">
          <h1 className="font-bold text-3xl text-center h-[2em]">SORT ORDER</h1>
          <div className="flex justify-evenly items-center">
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              DESENDING
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-white hover:text-black border-white"
            >
              ASENDING
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
