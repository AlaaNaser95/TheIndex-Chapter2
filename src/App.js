import React, { Component } from "react";
import authors from "./data";
import Sidebar from "./Sidebar";
import Authorslist from "./Authorslist";
class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <Authorslist authors={authors} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
