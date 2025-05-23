/**
 * Copyright 2025 PlayGamesMakeGames
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-cta/simple-cta.js";
/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element nav-bar
 */
export class NavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nav-bar";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
    //   localesPath:
    //     new URL("./locales/portfolio-screen.ar.json", import.meta.url).href +
    //     "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
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
        width: 100vw;
        height: 10%;
        position: fixed;
        top: var(--ddd-spacing-0);
        left: var(--ddd-spacing-0);
        z-index: 1000;
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }
      .title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        text-align: center;
      }
      .content {
        font-size: var(--ddd-font-size-m);
        text-align: center;
      }
      .sectionButtons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      simple-cta {
        margin-left: var(--ddd-spacing-8);
        margin-right: var(--ddd-spacing-8);
        display: flex;
        width: 20%;
        text-align: center;
        align-items: center;
        justify-content: center;
        min-width: 150px;
      }

      @media (max-width: 980px) {
        .sectionButtons {
          scale: 75%;
        }
        simple-cta {
          width: 100%;
        }
      }
      @media (max-width: 740px) {
        .sectionButtons {
          scale: 50%;
        }
        simple-cta {
          width: 100%;
        }
      }
      @media (max-width: 500px) {
        .sectionButtons {
          scale: 40%;
        }
        simple-cta {
          width: 100%;
        }
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="sectionButtons">
    <simple-cta><a href="#1">About</a></simple-cta>
    <simple-cta><a href=#2>Skills</a></simple-cta>
    <simple-cta><a href=#3>Projects</a></simple-cta>
    <simple-cta><a href=#4>Competitions</a></simple-cta>
    <simple-cta><a href=#5>Contact</a></simple-cta>
  </div>
</div>`;
  }
}

globalThis.customElements.define(NavBar.tag, NavBar);