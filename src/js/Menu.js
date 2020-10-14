class Menu {
  constructor(elementId) {
    this.element = document.createElement("nav");
    this.element.id = elementId;
  }

  render() {
    this.element.innerHTML = `
            <ul>
                <li class="main"><a href="#">WeatherApp</a></li>
                <li><a href="#currentWeather">Current Weather</a></li>
                <li><a href="#forecast">Forecast</a></li>
            </ul>
        `;
    document.querySelector("#root").appendChild(this.element);
  }
}

export default Menu;
