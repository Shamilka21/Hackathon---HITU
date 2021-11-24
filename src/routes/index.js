import React from "react";
import { Route, Routes } from "react-router";
import AddHousePage from "../pages/AddHousePage";
import MainPage from "../pages/MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddHousePage />} />
    </Routes>
  );
};

export default AppRoutes;
