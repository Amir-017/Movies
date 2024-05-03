import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Home from "./Pages/Home";
import Footer from "./component/Footer";
import Movies from "./Pages/movies";
import Series from "./Pages/series";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
