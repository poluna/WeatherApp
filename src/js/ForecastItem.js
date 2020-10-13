class ForecastItem {
  constructor(itemId) {
    this.element = document.createElement("div");
    // this.element.className = itemClass;
    this.element.id = itemId;
  }

  render(node) {
    const nodeHtml = node.innerHTML;
    node.innerHTML = `
        ${nodeHtml}  
        <div class="forecastItem" id=${this.element.id}>
          <h4>ForecastItem</h4>
          <img src="./img/icons/unknown.png"/>
          Temperature: <p class="temperature">- °C</p>
          Description: <p class="description">-</p>
          Wind: <p class="wind">- m/s</p>
        </div>    
    `;
  }
}

export default ForecastItem;
