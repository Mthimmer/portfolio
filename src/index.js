import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App";
import SimpleReactLightbox from 'simple-react-lightbox'
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//serviceWorker.unregister();

