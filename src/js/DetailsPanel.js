class DetailsPanel {
  constructor(elementId) {
    // this.element = document.createElement("div");
    // this.element.id = elementId;
  }
  render(node) {
    const nodeHtml = node.innerHTML;
    node.innerHTML = `
            ${nodeHtml}
            <div id="detailsPanel">
                <div class="humidity">
                    <h4>Humidity</h4>
                    <p>-</p>
                </div>
                <div class="pressure">
                    <h4>Pressure</h4>
                    <p>-</p>
                </div>
                <div class="wind">
                    <h4>Wind</h4>
                    <p>-</p>
                </div>
            </div> 
        `;
  }
}

export default DetailsPanel;
