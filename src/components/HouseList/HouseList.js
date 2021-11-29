import { Grid } from "@material-ui/core";
import React from "react";
import HouseCard from "../HouseCard/HouseCard";

const HouseList = ({ houses }) => {
  return (
    <Grid container spacing={3}>
      {houses.map((house) => (
        <Grid style={{ marginTop: "10px" }} item xs={4} key={house.id}>
          <HouseCard house={house} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HouseList;
