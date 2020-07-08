import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./userTable.css";

function UserTable() {
  const [developerState, setDeveloperState] = useState({
    users: [],
  });

  useEffect(() => {
    API.getUsers().then((res) => {
      setDeveloperState({
        users: res.data.results,
      });
    });
  }, []);

  console.log("developerState!!!", developerState);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Matt</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserTable;
