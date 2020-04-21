import React, { Component } from "react";


class Table extends Component {
    
  renderTableHeader() {
    let header = Object.keys(this.props.employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.props.employees.map(employee => {
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