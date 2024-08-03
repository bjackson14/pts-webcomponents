export class LoadingBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `<p>Hello, World!</p>`;
  }
}

customElements.define('loading-bar', LoadingBar);

export default LoadingBar;