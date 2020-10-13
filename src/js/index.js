import "../sass/style.scss";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import Menu from "./Menu";
import Api from "./Api";

const menu = new Menu("menu");
const currentWeather = new CurrentWeather("currentWeather");
const forecast = new Forecast("forecast");
const { setWeather } = CurrentWeather;

window.onload = () => {
  menu.render();
  currentWeather.render();
  forecast.render();
  Api.getWeather(setWeather);
};