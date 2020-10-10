class CurrentWeather {
    constructor(elementId) {
        this.element = document.createElement('section');
        this.element.id = elementId;
    }

    render() {
        this.element.innerHTML = `
            <h1>Current Weather</h1>
        `
        document.querySelector("#root").appendChild(this.element);
    }
}

export default CurrentWeather;