import React from "react";

const styles = {
  nav: {
    height: "100%"
  },
  title: {
    fontSize: "60px",
    textAlign: "center",
    justify: "center",
    margin: "10px",
    marginBottom: "20px",
    paddingTop: "40px"
  },
  headerInfo: {
    fontSize: "30px",
    color: "white",
    textAlign: "center",
    paddingBottom: "20px"
  }
};

function Navbar() {
  return (
    <nav style={styles.nav} className="nav navbar-nav navbar-center">
      <div className="nav-wrapper">
        <div style={styles.title}>Employee Directory</div>
        <div style={styles.headerInfo}>Sort by salary or filter.</div>
      </div>
    </nav>
  );
}

export default Navbar;
