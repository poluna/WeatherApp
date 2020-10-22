const KEY = "f9a1e044fc37ed8a5047d51e6d8a3ed8";

class Api {
  static async fetchWeather(latitude, longitude) {
    try {
      let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${KEY}&units=metric`
      );
      weather = await weather.json();
      let forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${KEY}&units=metric`
      );
      forecast = await forecast.json();
      return [weather, forecast];
    } catch (err) {
      window.alert("Cannot fetch the weather");
    }
  }

  static async fetchWeatherByCity(city) {
    try {
      let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${KEY}&units=metric`
      );
      let forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${KEY}&units=metric`
      );
      if (weather.cod === "404" || forecast.cod === "404") {
        throw new Error("Weather api request failed.");
      }
      weather = await weather.json();
      forecast = await forecast.json();
      return [weather, forecast];
    } catch (err) {
      window.alert(err.message);
    }
  }

  static getWeather(setWeather, setForecast) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const [weather, forecast] = await this.fetchWeather(
          latitude,
          longitude
        );
        // console.log(weather);
        // console.log(forecast);
        setWeather(weather);
        setForecast(forecast);
      });
    } else {
      window.alert("Geolocation is not supported");
    }
  }
}

export default Api;
