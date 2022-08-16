import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import CloudImage from "../assets/images/cloud.png";
import RainImage from "../assets/images/rain.png";
import SunImage from "../assets/images/sun.png";

const ResultsBox = (weather, weatherText) => {
  console.log("5", weather.weather);
  console.log("6", weatherText);

  const [image, setImage] = useState("");

  // if (weather.weather.icon.includes("cloud")) {
  //   setImage(CloudImage);
  // } else if (weather.weather.icon.includes("rain")) {
  //   setImage(RainImage);
  // } else setImage(SunImage);

  return (
    <div>
      <Grid container>
        <Typography variant="h4">{`${weatherText}'s Weather`}</Typography>
        <hr />
      </Grid>
    </div>
  );
};

export default ResultsBox;
