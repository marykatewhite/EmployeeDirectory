import React, { Component } from "react";
//  import './App.css';
import employees from "./employees.json";
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Table from "./components/Table.js";

class App extends Component {
  state = {
    employees
  };

  // removeFriend = id => {
  // //Filter this.state.friends for friends with an id not equal to the id being removed
  // const employees = this.state.employees.filter(employee => employee.name !== props.name);
  // //Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <Table />
      </div>
    );
  }
}

export default App;
