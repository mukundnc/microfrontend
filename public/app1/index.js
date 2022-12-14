let firstApp = document.createElement("template");
firstApp.innerHTML = `<style>
 p {
     color: white;
     background-color: brown;
     padding: 50px;
 }
</style>
<p>first app content</p> `;

class FirstApp extends HTMLElement {
  constructor() {
    super();

    const templateContent = firstApp.content;

    this.attachShadow({mode: 'open'}).appendChild(
      templateContent.cloneNode(true)
    );
  }
}


customElements.define('first-app', FirstApp);