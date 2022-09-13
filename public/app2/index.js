let secondApp = document.createElement("template");
secondApp.innerHTML = `<style>
 p {
     color: red;
     background-color: blue;
     padding: 70px;
 }
</style>
<p>second app content</p> `;

class SecondApp extends HTMLElement {
  constructor() {
    super();

    const templateContent = secondApp.content;

    this.attachShadow({mode: 'open'}).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

customElements.define('second-app', SecondApp);