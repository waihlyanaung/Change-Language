import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hello from "../pages/Hello";

const View = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </>
  );
};

export default View;
