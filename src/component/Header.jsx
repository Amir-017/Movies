import React, { useEffect, useState } from "react";
import { BiMoviePlay } from "react-icons/bi";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  MenuHandler,
  MenuList,
  // MenuItem,
  Input,
  Avatar,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesPage } from "../SystmeRdx/Slices/moviesSlices/moviesSlice";
import {
  aboutSearch,
  getSearchMovies,
  amer,
  del,
  aboutMovie,
  aboutSeries,
  getSearchSeries,
} from "../SystmeRdx/Slices/moviesSlices/searchMovies";
import { aboutRecommend } from "../SystmeRdx/Slices/moviesSlices/mediaSlice";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const Header = () => {
  // const [myCheck, setMyCheck] = useState("");

  function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <React.Fragment>
        <Menu
          open={isMenuOpen}
          handler={setIsMenuOpen}
          offset={{ mainAxis: 20 }}
          placement="bottom"
          allowHover={true}
        >
          <MenuHandler>
            <Typography as="div" variant="small" className="font-medium">
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                Resources
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </ListItem>
            </Typography>
          </MenuHandler>
          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </MenuList>
        </Menu>
        <div className="block lg:hidden">
          <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
        </div>
      </React.Fragment>
    );
  }
  function NavList() {
    return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
        <Typography
          as={Link}
          to="/"
          // variant="small"
          // color="white"
          className="font-medium"
        >
          <div className="text-gray-500 hover:bg-transparent   hover:text-white  flex items-center gap-2 py-2 pr-4 hover:text-xl ">
            Home
          </div>
        </Typography>
        <Typography
          as={Link}
          to="/movies"
          // variant=""
          // color="white"
          className="font-medium "
        >
          <div className="hover:bg-transparent  text-gray-500 hover:bg-black hover:text-white flex items-center gap-2 py-2 pr-4 hover:text-xl">
            Movies
          </div>
        </Typography>
        <Typography
          as={Link}
          to="/series"
          // variant="small"
          // color="white"
          className="font-medium"
        >
          <div className="hover:bg-transparent text-gray-500 hover:bg-black hover:text-white  flex items-center gap-2 py-2 pr-4 hover:text-xl">
            Series
          </div>
        </Typography>
      </List>
    );
  }

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //
  // const {
  //   movies,
  //   movies2,
  //   checkLoop,
  //   movieDetails: { belongs_to_collection },
  // } = useSelector((state) => state.myMovies);

  const { moviesSearch, searchLength, changeOneToAnother, seriesSearch } =
    useSelector((state) => state.aboutSearchMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesPage());
  }, []);

  const amer = (e) => {
    dispatch(getSearchMovies(e));
    dispatch(getSearchSeries(e));
    // setMyCheck(e);
  };

  return (
    <div className="  sticky top-0 z-10 h-max w-full  rounded-2xl px-4 py-2 lg:px-8 lg:py-4  f flex justify-center items-centers ">
      <div className="relative w-full container mx-auto">
        <Navbar className="bg-transparent border-[#0DCAF0] border-solid border-2 ">
          <div className="flex items-center justify-between text-white">
            <Typography
              as={Link}
              to="/"
              variant="h6"
              className="mr-4 text-2xl cursor-pointer py-1.5 lg:ml-2 flex"
            >
              Redux Movies
              <span className=" text-3xl ms-1 text-[#0DCAF0]">
                <BiMoviePlay />
              </span>
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>

            <Typography className="w-[35%] rounded-2xl border-2 border-y-brown-700 ">
              <label className="relative block ">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg
                    className="h-5 w-5 fill-slate-300"
                    viewBox="0 0 20 20"
                  ></svg>
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder={
                    changeOneToAnother == "serie"
                      ? "Search Series ..."
                      : "Search Movies ..."
                  }
                  type="text"
                  name="search"
                  onKeyUp={(e) => amer(e.target.value)}
                />
              </label>
            </Typography>
            {/* w-full text-white  bg-transparent */}
            <div className="hidden gap-2 lg:flex border-dotted hover:border-red-600  ">
              <Button
                color="white"
                size="sm"
                className="bg-transparent text-white border-green-600 border-2 p-3 hover:shadow-green-400"
                onClick={() => dispatch(aboutMovie())}
              >
                Search Movies
              </Button>
              <Button
                color="white"
                size="sm"
                className="bg-transparent text-white border-red-600 border-2 p-3 hover:shadow-red-900"
                onClick={() => dispatch(aboutSeries())}
              >
                Search Series
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>

          <Collapse open={openNav}>
            <NavList />
            <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
              <Button color="white" size="sm" className="bg-transparent">
                Search Movies
              </Button>
            </div>
          </Collapse>
        </Navbar>
        {changeOneToAnother == "serie" ? (
          <div className="relative">
            {!searchLength ? (
              <div className=" overflow-auto w-96 h-96 absolute right-[18rem]  ">
                <Badge
                  onClick={() => dispatch(del())}
                  content="Del"
                  className="absolute right-[9em] top-[4em] text-xl font-bold"
                >
                  <div className=" mt-5 rounded-2xl   grid gap-y-6 bg-gray-900  ">
                    {seriesSearch &&
                      seriesSearch.map((serie, i) => (
                        <div className="group hover:bg-[#0DCAF0] " key={i}>
                          <Link
                            to={`/series/${serie?.id}/title/${serie?.name}`}
                            className=" relative rounded-2xl  text-2xl   group-hover:text-3xl "
                          >
                            <Button
                              onClick={() => dispatch(aboutSearch())}
                              className="bg-transparent group-hover:text-black w-full text-start"
                            >
                              {serie?.name}
                            </Button>
                            <Avatar
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${serie?.poster_path}`}
                              alt="avatar"
                              className="absolute right-3"
                            />

                            <hr className="mt-4" />
                          </Link>
                        </div>
                      ))}
                  </div>
                </Badge>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className="relative">
            {!searchLength ? (
              <div className=" overflow-auto w-96 h-96 absolute right-[18rem]  ">
                <Badge
                  onClick={() => dispatch(del())}
                  content="Del"
                  className="dell absolute right-[9em] top-[4em] text-xl font-bold"
                >
                  <div className=" mt-5 rounded-2xl  grid gap-y-6 bg-gray-900  ">
                    {moviesSearch &&
                      moviesSearch.map((movie, i) => (
                        <Link
                          to={`/movies/${movie?.id}/title/${movie?.original_title}`}
                          className="relative rounded-2xl  text-2xl hover:bg-[#0DCAF0]  hover:h-[3rem]  hover:text-3xl "
                          key={i}
                        >
                          <Button
                            onClick={() => dispatch(aboutSearch())}
                            className="bg-transparent hover:text-black w-full text-start"
                          >
                            {movie?.title}
                          </Button>
                          <Avatar
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`}
                            alt="avatar"
                            className="absolute right-3"
                          />

                          <hr className="mt-4" />
                        </Link>
                      ))}
                  </div>
                </Badge>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
