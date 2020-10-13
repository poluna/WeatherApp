import "../sass/style.scss";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import Menu from "./Menu";
import Footer from "./Footer";
import Api from "./Api";

const menu = new Menu("menu");
const currentWeather = new CurrentWeather("currentWeather");
const forecast = new Forecast("forecast");
const footer = new Footer("footer");
const { setWeather } = CurrentWeather;
const { setForecast } = Forecast;

window.onload = () => {
  menu.render();
  currentWeather.render();
  forecast.render();
  footer.render();
  Api.getWeather(setWeather, setForecast);
};
