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

  useEffect(() => {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      setDeveloperState((d) => ({
        ...d,
        users: res.data.results,
        filteredUsers: res.data.results,
      }));
    });
  }, []);

  const handleSort = (heading) => {
    console.log("heading!!: ", heading);
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
      console.log("a", a);
      console.log("b", b);

      const lowerHeading = heading.toLowerCase();

      if (currentOrder === "ascend") {
        // account for missing values
        if (a[lowerHeading] === undefined) {
          return 1;
        } else if (b[lowerHeading] === undefined) {
          return -1;
        } else if (lowerHeading === "name") {
          return a[lowerHeading].first.localeCompare(b[lowerHeading].first);
        } else if (lowerHeading === "dob") {
          return a[lowerHeading].age - b[lowerHeading].age;
        } else {
          return a[lowerHeading].localeCompare(b[lowerHeading]);
        }
      } else {
        // account for missing values
        if (a[lowerHeading] === undefined) {
          return 1;
        } else if (b[lowerHeading] === undefined) {
          return -1;
        } else if (lowerHeading === "name") {
          return b[lowerHeading].first.localeCompare(a[lowerHeading].first);
        } else if (lowerHeading === "dob") {
          return b[lowerHeading].age - a[lowerHeading].age;
        } else {
          return b[lowerHeading].localeCompare(a[lowerHeading]);
        }
      }
    };
    const sortedUsers = developerState.filteredUsers.sort(compareFnc);
    const updatedHeadings = developerState.headings.map((elem) => {
      elem.order = elem.name === heading ? currentOrder : elem.order;
      return elem;
    });

    console.log("sorted users!!:", sortedUsers);
    setDeveloperState({
      ...developerState,
      filteredUsers: sortedUsers,
      headings: updatedHeadings,
    });
  };

  const handleSearch = (event) => {
    const sift = event.target.value.toLowerCase();
    const filteredList = developerState.users.filter((person) => {
      let values = `${person.name.first.toLowerCase()} ${person.name.last.toLowerCase()}`;
      if (values.indexOf(sift) > -1) {
        return person;
      } else {
        return null;
      }
    });

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
