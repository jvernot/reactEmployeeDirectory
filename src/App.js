import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import UserTable from "./components/UserTable/userTable";
import UserContext from "./utils/userContext";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <UserTable />
      </Wrapper>
    </div>
  );
}

export default App;
