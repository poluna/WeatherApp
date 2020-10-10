import ForecastItem from "./ForecastItem";

class Forecast {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
    this.day1 = new ForecastItem();
  }

  render() {
    document.querySelector("#root").appendChild(this.element);
    this.element.innerHTML = `
            <h1>Forecast</h1>
          `;
    this.day1.render(this.element);
  }
}

export default Forecast;
