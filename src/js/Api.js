const KEY = "f9a1e044fc37ed8a5047d51e6d8a3ed8";

class Api {
  static async fetchWeather(city, option) {
    try {
      let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/${option}?q=${city}&APPID=${KEY}&units=metric`
      );
      weather = await weather.json();
      console.log(weather);
      return weather;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Api;
