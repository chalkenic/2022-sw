import weather from "../APIs/http-visual-crossing-weather.js";

class WeatherApiService {
  apiKey = "C2S5GGYBCMY9JPZFW3AHPRU7C";

  getWeather(location) {
    console.log("2", location);
    var weatherData = weather.get(
      `/${location.latitude},${location.longitude}?key=${this.apiKey}`
    );
    return weatherData;
  }
}

export default new WeatherApiService();
