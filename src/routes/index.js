import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
// import BuyHouse from "../components/BuyHouse/BuyHouse";
import AddHousePage from "../pages/AddHousePage";
import BuyHousePage from "../pages/BuyHousePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/BuyHouse" element={<BuyHousePage />} />
      <Route path="/add" element={<AddHousePage />} />
    </Routes>
  );
};

export default AppRoutes;
