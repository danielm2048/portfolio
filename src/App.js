import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Skills from "./components/skills";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar />
          <div id="colorlib-main">
            <Introduction />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
