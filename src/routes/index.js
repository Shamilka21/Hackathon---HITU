import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import BuyHouse from '../pages/BuyHouse';
import AddHousePage from '../pages/AddHousePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/BuyHouse" element={<BuyHouse />} />
      <Route path="/add" element={<AddHousePage />} />
    </Routes>
  );
};

export default AppRoutes;
