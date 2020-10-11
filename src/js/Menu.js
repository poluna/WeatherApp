class Menu {
  constructor(elementId) {
    this.element = document.createElement("div");
    this.element.id = elementId;
  }

  render() {
    this.element.innerHTML = `
            <ul>
                <li class="main">WeatherApp</li>
                <li>Current Weather</li>
                <li>Forecast</li>
            </ul>
        `;
    document.querySelector("#root").appendChild(this.element);
  }
}

export default Menu;
