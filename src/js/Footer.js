class Footer {
  constructor(elementId) {
    this.element = document.createElement("footer");
    this.element.id = elementId;
  }

  render() {
    this.element.innerHTML = `
            <p>Made with ♥︎ by Pola</p>
        `;
    document.querySelector("#root").appendChild(this.element);
  }
}

export default Footer;
