import "../sass/style.scss";
import Forecast from "./Forecast";
import Form from "./Form";
import CurrentWeather from "./CurrentWeather";
import Menu from "./Menu";
import Footer from "./Footer";
import Api from "./Api";

const menu = new Menu("menu");
const form = new Form("form");
const currentWeather = new CurrentWeather("currentWeather");
const forecast = new Forecast("forecast");
const footer = new Footer("footer");
const { setWeather } = CurrentWeather;
const { setForecast } = Forecast;

window.onload = () => {
  menu.render();
  form.render();
  currentWeather.render();
  forecast.render();
  footer.render();
  Api.getWeather(setWeather, setForecast);
};
