import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import "./userTable.css";
import UserContext from "../../utils/userContext";
import Navbar from "../Navbar/navbar";
import UserData from "../UserData/userData";

function UserTable() {
  const [developerState, setDeveloperState] = useState({
    users: [],
  });

  useEffect(() => {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      setDeveloperState({
        users: res.data.results,
      });
    });
  }, []);

  console.log("developerState!!!", developerState);

  return (
    <UserContext.Provider value={developerState}>
      <Navbar />
      <UserData />
    </UserContext.Provider>
  );
}

export default UserTable;
