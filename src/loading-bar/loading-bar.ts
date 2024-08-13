export class LoadingBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.createStyles();
  }

  private render() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div part="container">
        <div part="background"></div>
        <div part="foreground"></div>
      </div>
    `;
  }

  private createStyles() {
    const css = new CSSStyleSheet();
    css.insertRule(`
      @keyframes scroll {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(1000%);
        }
      }
    `, 0);
    css.insertRule(`
      div[part="container"] {
        position: relative;
        height: 1rem;
        width: 100%;
        overflow: hidden;
      }
    `, 1);
    css.insertRule(`
      div[part="background"] { 
        position: absolute; 
        top: 0; 
        left: 0; 
        background-color: #F0F6FE; 
        width: 100%; 
        height: 100%; 
      }
    `, 2);
    css.insertRule(`
      div[part="foreground"] { 
        position: absolute; 
        top: 0; 
        left: 0; 
        background-color: #5692F4; 
        width: 10%; 
        height: 100%; 
        animation: scroll 3s linear infinite; 
      }
    `, 3);

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [css];
    }
  }
}

customElements.define('loading-bar', LoadingBar);

export default LoadingBar;