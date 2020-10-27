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
    console.log(data.weather[0].icon[2]);
    let backgroundColor, fontColor;
    console.log(data.weather[0].icon[2] === "n");
    if (data.weather[0].icon[2] === "n") {
      backgroundColor =
        "linear-gradient(to right top, #091b36, #0a2953, #0b3972, #0d4892, #1358b3)";
      fontColor = "rgb(245, 245, 245)";
    } else {
      backgroundColor =
        "linear-gradient(to right top, #265e89, #3981a9, #51a5c7, #6fcbe4, #91f1ff)";
      fontColor = "rgb(0, 0, 0)";
    }
    document.querySelector("body").style.backgroundImage = backgroundColor;
    document.querySelector(".main-info").style.color = fontColor;
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
