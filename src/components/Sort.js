import React from "react";

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



function Sort(props) {
  return (
    <div className="container center">
      <div className="row">
        <div className="col s12 m6 center">
          <div
            id="sortBtn"
            style={styles.sortBtn}
            className="waves-effect waves-light btn col s12 m10"
          >
            Sort by Salary
          </div>
        </div>
        <div className="col s12 m6">
          <div
            id="filterBtn"
            style={styles.filterBtn}
            className="waves-effect waves-light btn col s12 m10"
          >
            View Poors Only
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sort;
