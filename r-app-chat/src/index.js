import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import './assets/style.css';
// import './assets/bootstrap.min.css';

import reactToWebComponent from "react-to-webcomponent"

const reactApp = reactToWebComponent(App, React, ReactDOM)

customElements.define("react-app-chat", reactApp)