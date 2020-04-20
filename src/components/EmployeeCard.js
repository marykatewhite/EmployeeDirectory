import React from "react";

function EmployeeCard(props) {
  return (
        <tr>
          <td>{props.name}</td>
          <td>{props.role}</td>
          <td>{props.salary}</td>
          <td>{props.office}</td>
        </tr>
  );
}

export default EmployeeCard;
