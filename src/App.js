import React, { Component } from "react";
//  import './App.css';
import employees from "./employees.json";
import Navbar from "./components/Navbar.js";
import TableContainer from "./components/TableContainer.js";

class App extends Component {
  state = {
    employees
  };

  // poorEmployees = employees => {
  // const employees = this.state.employees.filter(employee => employee.salary <= "50000");
  //   this.setState({ employees });
  // };

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
