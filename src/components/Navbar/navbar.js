import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import UserContext from "../../utils/userContext";
import "./navbar.css";

function Navbar(props) {
  const context = useContext(UserContext);
  console.log("context in Navbar!!!:", context);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => {
            props.handleSearch(e);
          }}
        ></input>
      </form>
    </nav>
  );
}

export default Navbar;
