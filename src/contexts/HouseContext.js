import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { SET_HOUSES } from '../utils/Constants.js';
import { API } from './consts.js';

export const houseContext = createContext();

export const useHouse = () => useContext(houseContext);

const initialState = {
  houses: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case SET_HOUSES:
      return {
        ...state,
        houses: action.payload,
      };
    default:
      return state;
  }
};

const HouseContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addHouse = (newHouse) => {
    try {
      return axios.post(API, newHouse);
    } catch (error) {
      console.log(error.message);
    }
  };

  const buyHouse = async () => {
    try {
      let { data } = await axios.get(API);
      dispatch({ type: SET_HOUSES, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    addHouse,
    buyHouse,
    houses: state.houses,
  };

  return (
    <houseContext.Provider value={value}>{children}</houseContext.Provider>
  );
};

export default HouseContext;
