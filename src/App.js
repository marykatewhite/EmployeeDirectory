import React, { Component } from "react";
//  import './App.css';
import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Main from "./components/Main.js";
import Table from "./components/Table.js";
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard.js";

class App extends Component {
  state = {
    employees
  };

  // removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            role={employee.role}
            salary={employee.salary}
            office={employee.office}
          />
        ))}

      </div>
    );
  }
}

export default App;
