// Extend the HTMLElement class to create the web component
class PromoBanner extends HTMLElement {
  /**
   * The class constructor object
   */
  constructor() {
    // Always call super first in constructor
    super();

    // Creates a shadow root
    this.root = this.attachShadow({ mode: "closed" });

    // Render HTML
    this.root.innerHTML = `
      <style>
				.banner {
          position: relative;
          align-items: center;
          justify-content: space-between;
          min-inline-size: 100%;
          font-weight: bold;
          display: flex;
          flex-wrap: wrap;
          gap: var(--bespoke-gap, max(2.5vw, 7.5%));
          padding-block: var(--bespoke-padding-blk, var(--space-s, 1rem));
          padding-inline: var(--bespoke-padding-inl, var(--space-m, 1rem));
          background-color: var(--bespoke-bg, #c6e4e1);
          color: var(--bespoke-fg, #030349);
        }

        p {
          flex-basis: calc((var(--bespoke-basis, 30rem) - 100%) * 999);
          color: inherit;
          flex-grow: 1;
        }

        a,
        div {
         max-inline-size: fit-content;
         flex-basis: calc((var(--bespoke-basis, 30rem) - 100%) * 999);
         flex-grow: 1;
         color: inherit;
        }

        .banner::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset-block-start: min(2.5vw, 7.5%);
          inset-inline-start: 2.5%;
          inline-size: 95%;
          block-size: 100%;
          background-color: var(--bespoke-shadow, var(--clr-primary-300));
        }

        img {
          display: block;
          max-inline-size: 100%;
          background-color: var(--bespoke-fg, var(--clr-primary-200));
        }
				</style>

        <div class="banner">
          <div>
            <img src="/" alt="/" width="218" height="80" />
          </div>
          <p>
            <span slot="description"></span>
          </p>
          <a href="/"></a>
        </div>`;
  }
}

// Define the new web component
if ("customElements" in window) {
  customElements.define("promo-banner", PromoBanner);
}
