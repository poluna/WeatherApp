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
  Api.fetchWeather("Wrocław", "weather", setWeather);
};

// Api.fetchWeather("Wrocław", "forecast", setWeather);

// async function fetchForecast() {
//     try {
//       const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=wroclaw&APPID=f9a1e044fc37ed8a5047d51e6d8a3ed8&units=metric`);
//       const weatherJson = await weather.json();
//       console.log(weatherJson);
//       return weatherJson;
//     } catch (err) {
//         console.log(err)
//       }
// };

// fetchForecast();