import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./userTable.css";
import UserContext from "../../utils/userContext";
import Navbar from "../Navbar/navbar";
import TableHead from "../TableHead/tableHead";

function UserTable() {
  const [developerState, setDeveloperState] = useState({
    users: [],
    headings: [
      { name: "Picture", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" },
    ],
  });

  useEffect(() => {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      setDeveloperState({
        ...developerState,
        users: res.data.results,
      });
    });
  }, []);

  console.log("developerState!!!", developerState);

  return (
    <UserContext.Provider value={developerState}>
      <Navbar />
      <TableHead />
    </UserContext.Provider>
  );
}

export default UserTable;
