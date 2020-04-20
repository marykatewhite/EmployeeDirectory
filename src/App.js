import React, { Component } from "react";
//  import './App.css';
import employees from "./employees.json";
import Navbar from "./components/Navbar.js";
import Sort from "./components/Sort.js";
import Table from "./components/Table.js";

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
        <Sort />
        <Table />
      </div>
    );
  }
}

export default App;
