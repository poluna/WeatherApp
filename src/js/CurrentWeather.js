import DetailsPanel from "./DetailsPanel";

class CurrentWeather {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
    this.detailspanel = new DetailsPanel();
  }

  static setWeather(data) {
    document.querySelector(
      "#currentWeather img"
    ).src = `./img/icons/${data.weather[0].icon}.png`;
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
    if (data.weather[0].icon[2] === "n") {
      document.querySelector("body").className = "night";
    } else {
      document.querySelector("body").className = "day";
    }
  }

  render() {
    this.element.innerHTML = `
            <div class="main-info">
              <img src="./img/icons/unknown.png"/>
              <h2 class="temperature">- °C</h2>
              <h2 class="description">-</h2>
              <h3 class="location">-</h3>
            </div>
            <a href="#forecast">See forecast for the next days ⌄</a>
        `;
    this.detailspanel.render(this.element);
    document.querySelector("#root").appendChild(this.element);
  }
}

export default CurrentWeather;
