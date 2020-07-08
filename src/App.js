import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Navbar />
      </Wrapper>
    </div>
  );
}

export default App;
