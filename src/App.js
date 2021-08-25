import React, { Component } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Detail from "./components/Detail"

import '../src/App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {


  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/project/:slug" component={Detail} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
