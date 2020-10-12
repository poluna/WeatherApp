import ForecastItem from "./ForecastItem";

class Forecast {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
    this.day1 = new ForecastItem();
    this.day2 = new ForecastItem();
  }

  static setForecast(data) {
    document.querySelector(".temperature").innerHTML = `${Math.floor(
      data.main.temp
    )}°C`;
    document.querySelector(
      ".description"
    ).innerHTML = `${data.weather[0].description}`;
    document.querySelector(
      ".location"
    ).innerHTML = `${data.name}, ${data.sys.country}`;
    document.querySelector(".humidity p").innerHTML = `${data.main.humidity} %`;
    document.querySelector(
      ".pressure p"
    ).innerHTML = `${data.main.pressure} hPa`;
    document.querySelector(".wind p").innerHTML = `${data.wind.speed} m/s`;
  }

  render() {
    document.querySelector("#root").appendChild(this.element);
    this.element.innerHTML = `
            <h1>Forecast</h1>
            <div class="days"></div>
          `;
    const days = document.querySelector(".days");
    this.day1.render(days);
    this.day2.render(days);
  }
}

export default Forecast;
