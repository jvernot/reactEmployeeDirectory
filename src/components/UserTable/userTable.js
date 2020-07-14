import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./userTable.css";
import UserContext from "../../utils/userContext";
import Navbar from "../Navbar/navbar";
import TableHead from "../TableHead/tableHead";

function UserTable() {
  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Picture", width: "10%", order: "descend" },
      { name: "Name", width: "10%", order: "descend" },
      { name: "Phone", width: "20%", order: "descend" },
      { name: "Email", width: "20%", order: "descend" },
      { name: "DOB", width: "10%", order: "descend" },
    ],
  });

  const handleSort = (heading) => {
    let currentOrder = developerState.headings
      .filter((elem) => elem.name === heading)
      .map((elem) => elem.order)
      .toString();

    console.log("CURRENT ORDER!!: ", currentOrder);

    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        } else {
          return b[heading].localeCompare(a[heading]);
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map((elem) => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings,
    });
  };

  useEffect(() => {
    API.getUsers().then((res) => {
      setDeveloperState({
        ...developerState,
        users: res.data.results,
        filteredUsers: res.data.results,
      });
    });
  }, []);

  const handleSearch = (event) => {
    const sift = event.target.value.toLowerCase();
    const filteredList = developerState.users.filter((person) => {
      let values = `${person.name.first.toLowerCase()} ${person.name.last.toLowerCase()}`;
      if (values.indexOf(sift) > -1) {
        return person;
      }
    });
    console.log("filtered Users!!", filteredList);

    setDeveloperState({
      ...developerState,
      filteredUsers: filteredList,
    });
  };

  return (
    <UserContext.Provider value={developerState}>
      <Navbar handleSearch={handleSearch} />
      <TableHead handleSort={handleSort} />
    </UserContext.Provider>
  );
}

export default UserTable;
