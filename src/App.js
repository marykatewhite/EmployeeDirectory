import React, { Component } from "react";
import employees from "./employees.json";
import Navbar from "./components/Navbar.js";
import TableContainer from "./components/TableContainer.js";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <TableContainer />
      </div>
    );
  }
}

export default App;
