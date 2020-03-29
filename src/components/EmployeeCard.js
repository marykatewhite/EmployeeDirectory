import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <ul>
        <li>{props.name}</li>
        <li>{props.role}</li>
        <li>{props.salary}</li>
        <li>{props.office}</li>
      </ul>
    </div>
  );
}

export default EmployeeCard;