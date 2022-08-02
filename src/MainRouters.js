import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Content from "./Components/Contetn/Content";
import FIlms from "./Components/Films/FIlms";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/about" element={<About />} />
      <Route path="/film" element={<FIlms />} />
    </Routes>
  );
};

export default MainRouters;
