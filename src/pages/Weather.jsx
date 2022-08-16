import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ResultsBox from "../components/ResultsBox";
import ResultsTable from "../components/ResultsTable";
import WeatherApiService from "../services/weatherapi.service";

const Weather = () => {
  const [weatherToday, setWeatherToday] = useState({
    latitude: "51.48127",
    longitude: "3.18072",
  });

  const [results, setResults] = useState([]);

  const handleLatChange = (e) => {
    setWeatherToday((prev) => ({ ...prev, latitude: e.target.value }));
  };

  const handleLonChange = (e) => {
    setWeatherToday((prev) => ({ ...prev, longitude: e.target.value }));
  };

  const handleAPISubmit = (e) => {
    e.preventDefault();

    console.log("1:", weatherToday);

    WeatherApiService.getWeather(weatherToday).then((response) => {
      console.log("3", response.data);
      for (let index = 0; index < response.data.days.length; index++) {
        console.log(response.data.days[index]);
        setResults((results) => results.concat(response.data.days[index]));
      }
    });
  };

  return (
    <Box sx={{ paddingTop: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={11} align="center">
          <Paper elevation={5}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 600 }}>
              Weather Checker
            </Typography>
            <Box sx={{ paddingTop: 2 }}>
              <Typography
                variant="p"
                align="center"
                sx={{ fontWeight: 400, paddingTop: 5 }}
              >
                Please enter your latitude and longitude to check the weather
              </Typography>
            </Box>

            <form onSubmit={handleAPISubmit}>
              <FormControl sx={{ paddingBottom: 4 }} variant="outlined">
                <Grid container xs={12}>
                  <Grid item xs={4} alignContent="center">
                    <TextField
                      margin="dense"
                      label="Latitude"
                      value={weatherToday.latitude}
                      onChange={handleLatChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={4} sx={{ marginLeft: 1 }}>
                    <TextField
                      margin="dense"
                      label="Longitude"
                      value={weatherToday.longitude}
                      onChange={handleLonChange}
                    ></TextField>
                  </Grid>
                  <Grid item xs={3} sx={{ marginLeft: 1 }}>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        color: "success",
                        marginTop: "2px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "green",
                        },
                      }}
                      type="submit"
                    >
                      Get weather Details
                    </Button>
                  </Grid>
                </Grid>
              </FormControl>
            </form>
            <Grid container>
              {results.length !== 0 && (
                <>
                  <Grid item xs={6}>
                    <ResultsBox weather={results[0]} weatherText="Today" />
                  </Grid>
                  <Grid item xs={6}>
                    <ResultsBox weather={results[1]} weatherText="Tomorrow" />
                  </Grid>
                  <Grid item xs={12}>
                    <ResultsTable data={results} />
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Weather;
