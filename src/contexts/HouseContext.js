import axios from "axios";
import React, { createContext, useContext } from "react";
import { API } from "./consts.js";

const houseContext = createContext();

export const useProducts = () => useContext(houseContext);

const HouseContext = ({ children }) => {
  const addHouse = (newMovie) => {
    try {
      return axios.post(API, newMovie);
    } catch (error) {
      console.log(error.message);
    }
  };
  const value = {
    addHouse,
  };
  return <houseContext.Provider value={value}>{children}</houseContext.Provider>;
};

export default HouseContext;
