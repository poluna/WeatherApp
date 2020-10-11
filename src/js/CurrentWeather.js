class CurrentWeather {
  constructor(elementId) {
    this.element = document.createElement("section");
    this.element.id = elementId;
  }

  render() {
    this.element.innerHTML = `
            <h1>Current Weather</h1>
            <h2 class="temperature">- °<span>C</span><h2>
            <h2 class="description">-<h2>
            <h3 class="seeMore">See forecast for the next days</h3>
        `;
    document.querySelector("#root").appendChild(this.element);
  }
}

export default CurrentWeather;
