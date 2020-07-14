import React from "react";
// import { Link } from "react-router-dom";
import "./header.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>Use the search box to narrow your results.</p>
    </div>
  );
}

export default Header;
