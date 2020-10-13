import ForecastItem from "./ForecastItem";

class Forecast {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
    this.day1 = new ForecastItem("day1");
    this.day2 = new ForecastItem("day2");
    this.day3 = new ForecastItem("day3");
    this.day4 = new ForecastItem("day4");
  }

  static setForecast(data) {
    const dt = 8;
    for (let i = 0; i < 4; i++) {
      document.querySelector(
        `#day${i + 1} img`
      ).src = `./img/icons/${data.list[i * dt].weather[0].icon}.png`;
      document.querySelector(
        `#day${i + 1} .temperature`
      ).innerHTML = `${Math.round(data.list[i * dt].main.temp)}°C`;
      document.querySelector(`#day${i + 1} .description`).innerHTML = `${
        data.list[i * dt].weather[0].description
      }`;
      document.querySelector(`#day${i + 1} .wind`).innerHTML = `${Math.round(
        data.list[i * dt].wind.speed
      )} m/s`;
    }
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
    this.day3.render(days);
    this.day4.render(days);
  }
}

export default Forecast;
