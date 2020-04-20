import React from "react";

const styles = {
    searchForm: {
        margin: "20px",
    },
    searchBtn: {
      margin: "20px"
    },
    filterBtn: {
        margin: "20px"
    }

}
function Search(props) {
  return (
    <div className="container">
      <div className="row">
        <div id="searchForm" style={styles.searchForm} className="col s6 m4 center">
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Search"
            id="search"
          />
        </div>
        <div id="searchBtn" style={styles.searchBtn} className="col s2 m1">
          <div class="waves-effect waves-light btn">Search by Name</div>
        </div>
        <div className="col s12 m6">
          <div id="filterBtn" style={styles.filterBtn} className="waves-effect waves-light btn col s12 m10">View Poors Only</div>
        </div>
      </div>
    </div>
  );
}

export default Search;
