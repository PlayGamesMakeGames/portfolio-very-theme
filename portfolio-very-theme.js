/**
 * Copyright 2025 PlayGamesMakeGames
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";
/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.title = "Portfolio";
    this.color = "pughBlue";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        /* margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4); */
        background-color: var(--ddd-theme-default-color);
      }
      .title{
        margin-top: var(--ddd-spacing-0);
        /* margin-top: var(--ddd-spacing-20); */
      }
      .titleFirst{
        margin-top: var(--ddd-spacing-23); 
        margin-bottom: var(--ddd-spacing-0);
        background-color: var(--ddd-theme-default-color);
        font-size: var(--ddd-font-size-xl);
        text-align: center;
        width: 100vw;
        /* padding-left: var(--ddd-spacing-5); */
      }
      .scrollButton {
        position: fixed;
        bottom: var(--ddd-spacing-0);
        right: var(--ddd-spacing-0);
        scale: 1.5;
        padding: var(--ddd-spacing-8);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }
  
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      this.style.setProperty('--ddd-theme-default-color', `var(--ddd-theme-default-${this.color})`);
    }
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <scroll-button class="scrollButton"></scroll-button>
  <h1 class="titleFirst">${this.title}</h1>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);