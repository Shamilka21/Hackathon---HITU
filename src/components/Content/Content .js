import React, { useEffect } from "react";
import { useHouse } from "../../contexts/HouseContext";
import HouseList from "../HouseList/HouseList";

const Content = () => {
  const { buyHouse, houses } = useHouse();

  useEffect(() => {
    buyHouse();
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <HouseList houses={houses} />
    </div>
  );
};

export default Content;
