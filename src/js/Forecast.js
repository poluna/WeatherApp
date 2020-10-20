import ForecastItem from "./ForecastItem";

class Forecast {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
    this.day1 = new ForecastItem("day1");
    this.day2 = new ForecastItem("day2");
    this.day3 = new ForecastItem("day3");
    this.day4 = new ForecastItem("day4");
    this.day5 = new ForecastItem("day5");
  }

  static setForecast(data) {
    let startDay = 0;
    for (let i = 0; i < data.list.length; i++) {
      if (data.list[i].dt_txt.split(" ")[1] === "12:00:00") {
        startDay = i;
        break;
      }
    }
    const dt = 8;
    for (let i = 0; i < 5; i++) {
      let num = startDay + i * dt;
      document.querySelector(`#day${i + 1} h4`).innerHTML = `${
        data.list[num].dt_txt.split(" ")[0]
      }`;
      document.querySelector(
        `#day${i + 1} img`
      ).src = `./img/icons/${data.list[num].weather[0].icon}.png`;
      document.querySelector(
        `#day${i + 1} .temperature`
      ).innerHTML = `${Math.round(data.list[num].main.temp)}°C`;
      document.querySelector(
        `#day${i + 1} .description`
      ).innerHTML = `${data.list[num].weather[0].description}`;
      document.querySelector(
        `#day${i + 1} .wind`
      ).innerHTML = `wind: ${Math.round(data.list[num].wind.speed)} m/s`;
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
    this.day5.render(days);
  }
}

export default Forecast;
