export class LoadingBar extends HTMLElement {
  get animationDuration(): string | null {
    return this.getAttribute('animation-duration');
  }

  set animationDuration(val: string | null) {
    if (val && (/^\d+(s|ms)$/).test(val)) {
      this.setAttribute('animation-duration', val);
    } else {
      // Sets default value if value passed in fails validation or is null
      this.setAttribute('animation-duration', '3s');
    }
  }

  static get observedAttributes(): Array<string> {
    return ['animation-duration'];
  }

  constructor() {
    super();

    // Calls setter which will validate animation duration passed in through HTML
    this.animationDuration = this.animationDuration;
  }

  public connectedCallback(): void {
    this.render();
    this.createStyles();
  }

  public attributeChangedCallback(attrName: string, oldVal: string, newVal: string): void {
    if (attrName === 'animation-duration' && newVal !== oldVal) {
      this.animationDuration = newVal;
      this.createStyles();
    }
  }

  private render(): void {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div part="container">
        <div part="background"></div>
        <div part="foreground"></div>
      </div>
    `;
  }

  private createStyles(): void {
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
        animation: scroll ${this.animationDuration} linear infinite; 
      }
    `, 3);

    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [css];
    }
  }
}

customElements.define('pts-loading-bar', LoadingBar);

export default LoadingBar;