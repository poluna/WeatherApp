const KEY = "f9a1e044fc37ed8a5047d51e6d8a3ed8";

class Api {
  static getWeather(setWeather) {
    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          let weather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${KEY}&units=metric`
          );
          weather = await weather.json();
          console.log(weather);
          setWeather(weather);
        });
      } catch (err) {
        window.alert("Cannot fetch the weather");
      }
    } else {
      window.alert("Geolocation is not supported");
    }
  }
}

export default Api;
