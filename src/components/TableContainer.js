import React, { Component } from "react";
import employees from "../employees.json";
import { thisTypeAnnotation } from "@babel/types";
// import Sort from "./Sort.js";
// import Table from "./Table.js";

const styles = {
  searchForm: {
    margin: "20px"
  },
  sortBtn: {
    margin: "20px"
  },
  filterBtn: {
    margin: "20px"
  }
};

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { employees };
    this.sortBySalary = this.sortBySalary.bind(this);
    this.filterBySalary = this.filterBySalary.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

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
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{role}</td>
          <td>{salary}</td>
          <td>{office}</td>
        </tr>
      );
    });
  }

  sortBySalary() {
    let prevState = [...this.state.employees];
    prevState.sort((a, b) => (a.salary - b.salary));
    this.setState({employees: [...prevState]});
  }

  filterBySalary() {
console.log("filter")
    let prevState = [...this.state.employees];
    const array = prevState.filter(employees => employees.salary <= "50000");
    this.setState({employees: [...array]});
  }

  render() {
    return (
      <div>
        <div className="container center">
          <div className="row">
            <div className="col s12 m6 center">
              <button
                id="sortBtn"
                onClick={this.sortBySalary}
                style={styles.sortBtn}
                className="waves-effect waves-light btn col s12 m10"
              >
                Sort by Salary
              </button>
            </div>
            <div className="col s12 m6">
              <button
                id="filterBtn"
                onClick={this.filterBySalary}
                style={styles.filterBtn}
                className="waves-effect waves-light btn col s12 m10"
              >
                View Poors Only
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 center">
              <table className="striped center">
                <thead>
                  <tr>{this.renderTableHeader()}</tr>
                </thead>
                <tbody>{this.renderTableData()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableContainer;
