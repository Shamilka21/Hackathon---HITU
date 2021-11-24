import React from 'react';
import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import BuyHouse from '../pages/BuyHouse';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/BuyHouse" element={<BuyHouse />} />
    </Routes>
  );
};

export default AppRoutes;
