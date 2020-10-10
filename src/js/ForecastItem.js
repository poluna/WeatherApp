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
        <h4>ForecastItem</h4>    
    `;
  }
}

export default ForecastItem;
