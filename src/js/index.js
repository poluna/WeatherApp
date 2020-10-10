import "../sass/style.scss";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

const currentWeather = new CurrentWeather("currentWeather");
const forecast = new Forecast("forecast");

window.onload = () => {
  currentWeather.render();
  forecast.render();
};
