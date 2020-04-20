import React, { Component } from "react";
import employees from "../employees.json";


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { employees };
  }
    
  // filter by salary
//   const poorEmployees = props.employees.filter(employee => employee.salary <= "50000");
//   this.setState({poorEmployees});

  // sort by salary



  renderTableHeader() {
    let header = Object.keys(this.state.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.employees.map(employee => {
      const { id, name, role, office, salary } = employee;
      return (
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{role}</td>
          <td>{salary}</td>
          <td>{office}</td>
        </tr>
      );
    });
  }

  render() {
    return (
        <div className = "container">
      <div className="row">
        <div className="col s12 center">
          <table className="striped center">
            <thead>
              <tr>{this.renderTableHeader()}</tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div></div>
    );
  }
}

export default Table;
