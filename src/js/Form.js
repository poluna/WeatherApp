import Api from "./Api";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

class Form {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
  }

  render() {
    this.element.innerHTML = `
            <form>
              <div class="search">
                <input id="city" type="text" placeholder="Search weather by city..." />
                <button id="btnSearch"><i class="fas fa-search"></i></button>
              </div>
            </form>
          `;
    document.querySelector("#root").appendChild(this.element);
    document
      .getElementById("btnSearch")
      .addEventListener("click", (e) => this.validate(e));
  }

  async validate(e) {
    e.preventDefault();
    const city = document.getElementById("city").value;
    if (city) {
      try {
        const [weather, forecast] = await Api.fetchWeatherByCity(city);
        CurrentWeather.setWeather(weather);
        Forecast.setForecast(forecast);
      } catch (err) {
        // console.log(err);
      }
    }
  }
}

export default Form;
