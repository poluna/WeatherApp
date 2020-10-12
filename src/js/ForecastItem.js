class ForecastItem {
  constructor(itemClass, itemId) {
    this.element = document.createElement("div");
    this.element.className = itemClass;
    this.element.id = itemId;
  }

  render(node) {
    const nodeHtml = node.innerHTML;
    node.innerHTML = `
        ${nodeHtml}  
        <div class="forecastItem">
          <h4>ForecastItem</h4>
          Temperature: <p class="temperature">- °C</p>
          Description: <p class="description">-</p>
          Wind: <p class="wind">- m/s</p>
        </div>    
    `;
  }
}

export default ForecastItem;
